import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Button,
  Divider,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  IconButton,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { learningPath } from "../curriculum/learning-path";
import { problems } from "../problems";
import { useSolvedProblems } from "../hooks/useSolvedProblems";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from '@mui/icons-material/Delete';

function Dashboard() {
  const [selectedTech, setSelectedTech] = useState(() => {
    const savedTech = localStorage.getItem('selectedTechnology');
    return savedTech || "javascript";
  });
  const {
    isSolved,
    markAsSolved,
    markAsUnsolved,
    getSolvedCount,
    getProgress,
  } = useSolvedProblems();
  const [hideSolved, setHideSolved] = useState(() => {
    const savedHideSolved = localStorage.getItem('hideSolved');
    return savedHideSolved === 'true';
  });
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedTechnology', selectedTech);
  }, [selectedTech]);

  useEffect(() => {
    localStorage.setItem('hideSolved', hideSolved.toString());
  }, [hideSolved]);

  const getProblems = (category, topic) => {
    return problems.filter(
      (problem) => problem.category === category && problem.topic === topic
    );
  };

  const handleTechChange = (event, newTech) => {
    if (newTech !== null) {
      setSelectedTech(newTech);
    }
  };

  const technologies = [
    { value: "javascript", label: "JavaScript" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "nodejs", label: "Node.js" },
    { value: "express", label: "Express" },
    { value: "nestjs", label: "NestJS" },
    { value: "react", label: "React" },
    { value: "project", label: "Projects" },
  ];

  const filteredTechnologies = Object.entries(learningPath).filter(
    ([tech]) => selectedTech === "all" || tech === selectedTech
  );

  const getTechnologyProblemsCount = (technology) => {
    if (technology === "all") {
      return problems.length;
    }
    return problems.filter((p) => {
      return p.category === technology;
    }).length;
  };

  const filterProblems = (problems) => {
    if (!hideSolved) return problems;
    return problems.filter((p) => !isSolved(p.slug));
  };

  const hasUnsolvedProblems = (problems) => {
    return problems.some((p) => !isSolved(p.slug));
  };

  const getVisibleSubjects = (topic, technology) => {
    if (!hideSolved) return topic.subjects;

    return topic.subjects.filter((subject) => {
      const subjectProblems = getProblems(
        technology === "html-css" ? "html" : technology,
        subject
      );
      return hasUnsolvedProblems(subjectProblems);
    });
  };

  const getVisibleTopics = (path, technology) => {
    if (!hideSolved) return path.topics;

    return path.topics.filter((topic) => {
      const visibleSubjects = getVisibleSubjects(topic, technology);
      return visibleSubjects.length > 0;
    });
  };

  const getVisibleTechnologies = () => {
    if (!hideSolved) return filteredTechnologies;

    return filteredTechnologies.filter(([technology, path]) => {
      const visibleTopics = getVisibleTopics(path, technology);
      return visibleTopics.length > 0;
    });
  };

  const getUnassignedProblems = (technology) => {
    const allProblems = problems.filter((p) => p.category === technology);
    const assignedProblems = allProblems.filter((p) => {
      const techPath = learningPath[technology];
      return techPath?.topics.some((topic) => topic.subjects.includes(p.topic));
    });

    return allProblems.filter((p) => !assignedProblems.includes(p));
  };

  const getTechnologyStats = (technology) => {
    const techProblems = problems.filter((p) => p.category === technology);
    const duration = learningPath[technology]?.duration || "N/A";
    return {
      problemCount: techProblems.length,
      duration,
    };
  };

  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, color: "text.primary" }}
          >
            Learning Path
          </Typography>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={hideSolved}
                onChange={(e) => setHideSolved(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "primary.main",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "primary.main",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                Hide Solved
              </Typography>
            }
            sx={{ ml: 0 }}
          />
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => setResetDialogOpen(true)}
            size="small"
            color="error"
            sx={{ ml: 2 }}
          >
            Reset Progress
          </Button>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 0.5,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <ToggleButtonGroup
            value={selectedTech}
            exclusive
            onChange={handleTechChange}
            size="small"
            aria-label="technology filter"
          >
            {technologies.map((tech) => {
              const problemCount = getTechnologyProblemsCount(tech.value);

              return (
                <ToggleButton
                  key={tech.value}
                  value={tech.value}
                  sx={{
                    textTransform: "none",
                    px: 2,
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                  }}
                >
                  {tech.label}
                  <Chip
                    label={problemCount}
                    size="small"
                    sx={{
                      marginLeft: 1,
                      height: 20,
                      minWidth: 20,
                      fontSize: "0.75rem",
                      bgcolor:
                        selectedTech === tech.value
                          ? "primary.light"
                          : "action.selected",
                      color:
                        selectedTech === tech.value
                          ? "primary.contrastText"
                          : "text.primary",
                    }}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Paper>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            bgcolor: "background.paper",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
              Your Progress
            </Typography>
            {hideSolved && (
              <Typography variant="body2" color="text.secondary">
                Showing unsolved problems only
              </Typography>
            )}
          </Box>
          <Grid container spacing={2}>
            {technologies.map((tech) => {
              if (tech.value === "all") return null;
              const techProblems = problems.filter(
                (p) => p.category === tech.value
              );
              const solvedCount = getSolvedCount(techProblems);
              const progress = getProgress(techProblems);

              return (
                <Grid item xs={12} sm={6} md={4} key={tech.value}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {tech.label}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {solvedCount}/{techProblems.length}
                        </Typography>
                        {hideSolved && hasUnsolvedProblems(techProblems) && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "warning.main",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            {techProblems.length - solvedCount} remaining
      </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: 8,
                        bgcolor: "background.default",
                        borderRadius: 1,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: `${progress}%`,
                          bgcolor:
                            progress === 100 ? "success.main" : "primary.main",
                          transition:
                            "width 0.5s ease-in-out, background-color 0.5s ease-in-out",
                        }}
                      />
                    </Box>
                  </Box>
        </Grid>
              );
            })}
        </Grid>
        </Paper>
      </Box>

      {getVisibleTechnologies().map(([technology, path]) => (
        <Box key={technology} sx={{ mb: 6 }}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              mb: 3,
              bgcolor: "background.paper",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "text.primary" }}
                >
                  {technology.charAt(0).toUpperCase() + technology.slice(1)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {getTechnologyStats(technology).duration} •{" "}
                  {getTechnologyStats(technology).problemCount} Problems
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Chip
                  label={`${getProgress(
                    problems.filter((p) => p.category === technology)
                  )}%`}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </Box>
          </Paper>

          {getVisibleTopics(path, technology).map((topic) => (
            <Paper key={topic.title} variant="outlined" sx={{ mb: 3 }}>
              <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {topic.title}
                </Typography>
              </Box>

              <Box sx={{ p: 2 }}>
                {getVisibleSubjects(topic, technology).map((subject) => {
                  const subjectProblems = getProblems(
                    technology === "html-css" ? "html" : technology,
                    subject
                  );

                  return (
                    <Box
                      key={subject}
                      sx={{ mb: 2, "&:last-child": { mb: 0 } }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {subject}
                        </Typography>
                        <Chip
                          label={
                            subjectProblems.length > 0
                              ? `${subjectProblems.length} Problems`
                              : "No problems"
                          }
                          size="small"
                          variant="outlined"
                          sx={{
                            height: 24,
                            borderColor:
                              subjectProblems.length > 0
                                ? "primary.main"
                                : "divider",
                            color:
                              subjectProblems.length > 0
                                ? "text.primary"
                                : "text.disabled",
                          }}
                        />
                      </Box>

                      {subjectProblems.length > 0 ? (
                        <List dense disablePadding>
                          {filterProblems(subjectProblems).map(
                            (problem, index, filteredArray) => (
                              <React.Fragment key={problem.id}>
                                <ListItem
                                  disableGutters
                                  sx={{
                                    py: 0.5,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <ListItemText
                                    primary={
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body2"
                                          color="text.secondary"
                                          sx={{ minWidth: "35px" }}
                                        >
                                          #{problem.id}
                                        </Typography>
                                        <Typography
                                          variant="body2"
                                          color="text.primary"
                                          sx={{
                                            textDecoration: isSolved(
                                              problem.slug
                                            )
                                              ? "line-through"
                                              : "none",
                                            opacity: isSolved(problem.slug)
                                              ? 0.7
                                              : 1,
                                          }}
                                        >
                                          {problem.title}
                                        </Typography>

                                        {isSolved(problem.slug) && (
                                          <Chip
                                            label="Solved"
                                            size="small"
                                            color="success"
                                            sx={{ height: 20 }}
                                          />
                                        )}
                                      </Box>
                                    }
                                  />
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Chip
                                      label={problem.difficulty}
                                      size="small"
                                      color={
                                        problem.difficulty === "beginner"
                                          ? "success"
                                          : problem.difficulty ===
                                            "intermediate"
                                          ? "warning"
                                          : "error"
                                      }
                                      sx={{ height: 24 }}
                                    />
                                    <IconButton
                                      size="small"
                                      onClick={() =>
                                        isSolved(problem.slug)
                                          ? markAsUnsolved(problem.slug)
                                          : markAsSolved(problem.slug)
                                      }
                                      sx={{
                                        color: isSolved(problem.slug)
                                          ? "success.main"
                                          : "text.secondary",
                                        "&:hover": {
                                          color: isSolved(problem.slug)
                                            ? "error.main"
                                            : "success.main",
                                        },
                                      }}
                                    >
                                      {isSolved(problem.slug) ? (
                                        <UndoIcon />
                                      ) : (
                                        <DoneIcon />
                                      )}
                                    </IconButton>
                                    <Button
                                      component={Link}
                                      to={`/problems/${problem.slug}`}
                                      size="small"
                                      sx={{
                                        minWidth: "auto",
                                        textTransform: "none",
                                        fontSize: "0.8125rem",
                                      }}
                                    >
                                      {isSolved(problem.slug)
                                        ? "Review"
                                        : "Solve"}
                                    </Button>
                                  </Box>
                                </ListItem>
                                {index < filteredArray.length - 1 && (
                                  <Divider sx={{ borderColor: "divider" }} />
                                )}
                              </React.Fragment>
                            )
                          )}
                          {hideSolved &&
                            filterProblems(subjectProblems).length === 0 && (
                              <Box
                                sx={{
                                  py: 2,
                                  px: 1,
                                  bgcolor: "background.default",
                                  borderRadius: 1,
                                  textAlign: "center",
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  color="text.disabled"
                                >
                                  All problems in this section are solved
                                </Typography>
                              </Box>
                            )}
                        </List>
                      ) : (
                        <Box
                          sx={{
                            py: 2,
                            px: 1,
                            bgcolor: "background.default",
                            borderRadius: 1,
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="body2" color="text.disabled">
                            No problems available yet
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          ))}

          {(() => {
            const unassignedProblems = getUnassignedProblems(technology);
            if (hideSolved && !hasUnsolvedProblems(unassignedProblems))
              return null;
            if (unassignedProblems.length === 0) return null;

            return (
              <Paper variant="outlined" sx={{ mb: 3 }}>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    Additional Problems
                  </Typography>
                </Box>

                <Box sx={{ p: 2 }}>
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          color: "text.secondary",
                        }}
                      >
                        Miscellaneous
                      </Typography>
                      <Chip
                        label={`${unassignedProblems.length} Problems`}
                        size="small"
                        variant="outlined"
                        sx={{
                          height: 24,
                          borderColor: "primary.main",
                          color: "text.primary",
                        }}
                      />
                    </Box>

                    <List dense disablePadding>
                      {filterProblems(unassignedProblems).map(
                        (problem, index, filteredArray) => (
                          <React.Fragment key={problem.slug}>
                            <ListItem
                              disableGutters
                              sx={{
                                py: 0.5,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      color="text.primary"
                                      sx={{
                                        textDecoration: isSolved(problem.slug)
                                          ? "line-through"
                                          : "none",
                                        opacity: isSolved(problem.slug)
                                          ? 0.7
                                          : 1,
                                      }}
                                    >
                                      {problem.title}
                                    </Typography>

                                    {isSolved(problem.slug) && (
                                      <Chip
                                        label="Solved"
                                        size="small"
                                        color="success"
                                        sx={{ height: 20 }}
                                      />
                                    )}
                                  </Box>
                                }
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Chip
                                  label={problem.difficulty}
                                  size="small"
                                  color={
                                    problem.difficulty === "beginner"
                                      ? "success"
                                      : problem.difficulty === "intermediate"
                                      ? "warning"
                                      : "error"
                                  }
                                  sx={{ height: 24 }}
                                />
                                <IconButton
                                  size="small"
                                  onClick={() =>
                                    isSolved(problem.slug)
                                      ? markAsUnsolved(problem.slug)
                                      : markAsSolved(problem.slug)
                                  }
                                  sx={{
                                    color: isSolved(problem.slug)
                                      ? "success.main"
                                      : "text.secondary",
                                    "&:hover": {
                                      color: isSolved(problem.slug)
                                        ? "error.main"
                                        : "success.main",
                                    },
                                  }}
                                >
                                  {isSolved(problem.slug) ? (
                                    <UndoIcon />
                                  ) : (
                                    <DoneIcon />
                                  )}
                                </IconButton>
                                <Button
                                  component={Link}
                                  to={`/problems/${problem.slug}`}
                                  size="small"
                                  sx={{
                                    minWidth: "auto",
                                    textTransform: "none",
                                    fontSize: "0.8125rem",
                                  }}
                                >
                                  {isSolved(problem.slug) ? "Review" : "Solve"}
                                </Button>
                              </Box>
                            </ListItem>
                            {index < filteredArray.length - 1 && (
                              <Divider sx={{ borderColor: "divider" }} />
                            )}
                          </React.Fragment>
                        )
                      )}
                    </List>
                  </Box>
                </Box>
              </Paper>
            );
          })()}
        </Box>
      ))}

      {hideSolved && getVisibleTechnologies().length === 0 && (
        <Box
          sx={{
            py: 8,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            🎉 Congratulations!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            You've solved all the problems. Great job!
          </Typography>
          <Button
            onClick={() => setHideSolved(false)}
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Show All Problems
          </Button>
        </Box>
      )}

      <Dialog
        open={resetDialogOpen}
        onClose={() => setResetDialogOpen(false)}
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-description"
      >
        <DialogTitle id="reset-dialog-title">
          Reset All Progress?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="reset-dialog-description">
            This will reset all your progress, including:
            <ul style={{ marginTop: '8px' }}>
              <li>Solved problems</li>
              <li>Selected technology</li>
              <li>Display preferences</li>
            </ul>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setResetDialogOpen(false)}
            color="inherit"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleReset}
            color="error"
            variant="contained"
            autoFocus
          >
            Reset Everything
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Dashboard; 
