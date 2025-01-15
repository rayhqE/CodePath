import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  ListItemButton,
  IconButton,
  useTheme,
  useMediaQuery,
  Collapse,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WarningIcon from "@mui/icons-material/Warning";
import { problems } from "../problems";
import { subjectDescriptions } from "../curriculum/subject-descriptions";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { learningPath } from "../curriculum/learning-path";
import { ExpandLess as ExpandLessIcon } from "@mui/icons-material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import { NAVBAR_HEIGHT } from "./Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DRAWER_WIDTH = 280;
const DAILY_SOLUTION_QUOTA = 3;
const QUOTA_STORAGE_KEY = "solutionViewQuota";
const VIEWED_SOLUTIONS_KEY = "viewedSolutions";

function ProblemDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const selectedProblemRef = useRef(null);

  // Get problem first
  const problem = problems.find((p) => p.slug === slug);

  // Then use it in state initialization
  const [showSolution, setShowSolution] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [expandedTech, setExpandedTech] = useState(problem?.category || null);
  const [isDrawerCollapsed, setIsDrawerCollapsed] = useState(false);
  const [quotaRemaining, setQuotaRemaining] = useState(DAILY_SOLUTION_QUOTA);
  const [viewedSolutions, setViewedSolutions] = useState(() => {
    const saved = localStorage.getItem(VIEWED_SOLUTIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const COLLAPSED_DRAWER_WIDTH = 60;

  const relatedProblems = problems.filter(
    (p) => p.category === problem?.category && p.topic === problem?.topic
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  // Update expanded tech when problem changes
  useEffect(() => {
    if (problem?.category) {
      setExpandedTech(problem.category);
    }
  }, [problem?.category]);

  // Add this effect to scroll to selected problem
  useEffect(() => {
    if (selectedProblemRef.current) {
      selectedProblemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [slug, expandedTech]); // Scroll when problem or expanded section changes

  // Load and check quota on component mount
  useEffect(() => {
    const loadQuota = () => {
      const quotaData = localStorage.getItem(QUOTA_STORAGE_KEY);
      if (quotaData) {
        const { date, remaining } = JSON.parse(quotaData);
        const today = new Date().toDateString();

        // Reset quota if it's a new day
        if (date !== today) {
          setQuotaRemaining(DAILY_SOLUTION_QUOTA);
          localStorage.setItem(
            QUOTA_STORAGE_KEY,
            JSON.stringify({
              date: today,
              remaining: DAILY_SOLUTION_QUOTA,
            })
          );
        } else {
          setQuotaRemaining(remaining);
        }
      } else {
        // Initialize quota if not exists
        const today = new Date().toDateString();
        localStorage.setItem(
          QUOTA_STORAGE_KEY,
          JSON.stringify({
            date: today,
            remaining: DAILY_SOLUTION_QUOTA,
          })
        );
      }
    };

    loadQuota();
  }, []);

  // Load viewed solutions on mount
  useEffect(() => {
    const loadViewedSolutions = () => {
      const saved = localStorage.getItem(VIEWED_SOLUTIONS_KEY);
      if (saved) {
        setViewedSolutions(JSON.parse(saved));
      }
    };
    loadViewedSolutions();
  }, []);

  const handleShowSolution = () => {
    const hasBeenViewed = viewedSolutions.includes(slug);

    if (hasBeenViewed || quotaRemaining > 0) {
      setShowSolution(true);

      if (!hasBeenViewed) {
        // Only decrease quota and update viewed solutions if not previously viewed
        const newQuota = quotaRemaining - 1;
        setQuotaRemaining(newQuota);

        // Update quota in localStorage
        const today = new Date().toDateString();
        localStorage.setItem(
          QUOTA_STORAGE_KEY,
          JSON.stringify({
            date: today,
            remaining: newQuota,
          })
        );

        // Update viewed solutions
        const updatedViewedSolutions = [...viewedSolutions, slug];
        setViewedSolutions(updatedViewedSolutions);
        localStorage.setItem(
          VIEWED_SOLUTIONS_KEY,
          JSON.stringify(updatedViewedSolutions)
        );
      }
    }
  };

  // Reset showSolution when route (slug) changes
  useEffect(() => {
    setShowSolution(false);
  }, [slug]);

  if (!problem) {
    navigate("/");
    return null;
  }

  const subjectInfo = subjectDescriptions[problem.category]?.[problem.topic];

  const handleSolutionClick = () => {
    if (!showSolution) {
      setDialogOpen(true);
    } else {
      setShowSolution(false);
    }
  };

  const handleConfirmViewSolution = () => {
    setDialogOpen(false);
    setShowSolution(true);
  };

  const getProblems = (topics) => {
    return problems.filter((p) => {
      return topics.includes(p.topic);
    });
  };

  const handleTechClick = (tech) => {
    setExpandedTech(expandedTech === tech ? null : tech);
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        bgcolor: "background.default",
      }}
    >
      {/* Sidebar */}
      <Drawer
        variant={"persistent"}
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: isDrawerCollapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isDrawerCollapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH,
            boxSizing: "border-box",
            bgcolor: "background.paper",
            borderRight: "1px solid",
            borderColor: "divider",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            mt: `${NAVBAR_HEIGHT}px`,
            height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          {!isDrawerCollapsed && (
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, color: "text.primary" }}
            >
              All Problems
            </Typography>
          )}
          <IconButton
            onClick={() => setIsDrawerCollapsed(!isDrawerCollapsed)}
            sx={{
              ml: isDrawerCollapsed ? 0 : "auto",
              transform: isDrawerCollapsed ? "rotate(180deg)" : "none",
              color: "text.secondary",
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Box sx={{ overflow: "auto", flex: 1, p: isDrawerCollapsed ? 1 : 2 }}>
          {Object.entries(learningPath).map(([technology, path]) => (
            <Box key={technology} sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleTechClick(technology)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  minHeight: 40,
                  justifyContent: isDrawerCollapsed ? "center" : "flex-start",
                  px: isDrawerCollapsed ? 1 : 2,
                  bgcolor:
                    expandedTech === technology
                      ? "action.selected"
                      : "transparent",
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                {!isDrawerCollapsed ? (
                  <>
                    <ListItemText
                      primary={technology.replace("-", " ")}
                      primaryTypographyProps={{
                        variant: "subtitle2",
                        sx: {
                          textTransform: "capitalize",
                          color: "text.secondary",
                          fontWeight: 500,
                        },
                      }}
                    />
                    {expandedTech === technology ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </>
                ) : (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      bgcolor:
                        expandedTech === technology
                          ? "primary.main"
                          : "grey.300",
                      color:
                        expandedTech === technology ? "white" : "text.primary",
                    }}
                  >
                    {technology[0].toUpperCase()}
                  </Typography>
                )}
              </ListItemButton>

              {!isDrawerCollapsed && (
                <Collapse in={expandedTech === technology} timeout="auto">
                  <Box sx={{ pl: 2 }}>
                    {path.topics.map((topic) => {
                      const topicProblems = getProblems(topic.subjects);

                      console.log(
                        "Topic Problems",
                        topicProblems,
                        topic,
                        technology
                      );

                      if (topicProblems.length === 0) return null;

                      return (
                        <Box key={topic.title} sx={{ mb: 2 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              px: 1,
                              color: "text.secondary",
                              display: "block",
                              mb: 0.5,
                            }}
                          >
                            {topic.title}
                          </Typography>

                          <List dense disablePadding>
                            {topicProblems.map((p) => (
                              <ListItem
                                key={p.slug}
                                disablePadding
                                sx={{ mb: 0.5 }}
                                ref={
                                  p.slug === slug ? selectedProblemRef : null
                                }
                              >
                                <ListItemButton
                                  component={Link}
                                  to={`/problems/${p.slug}`}
                                  selected={p.slug === slug}
                                  sx={{
                                    borderRadius: 1,
                                    py: 0.5,
                                    "&.Mui-selected": {
                                      bgcolor: "primary.main",
                                      color: "white",
                                      "&:hover": {
                                        bgcolor: "primary.dark",
                                      },
                                    },
                                  }}
                                >
                                  <ListItemText
                                    primary={p.title}
                                    secondary={p.difficulty}
                                    primaryTypographyProps={{
                                      variant: "body2",
                                      sx: {
                                        fontWeight: p.slug === slug ? 500 : 400,
                                        color:
                                          p.slug === slug
                                            ? "inherit"
                                            : "text.primary",
                                      },
                                    }}
                                    secondaryTypographyProps={{
                                      sx: {
                                        color:
                                          p.slug === slug
                                            ? "inherit"
                                            : `${p.difficulty}.main`,
                                        opacity: p.slug === slug ? 0.7 : 1,
                                        fontSize: "0.75rem",
                                      },
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      );
                    })}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            md: `calc(100% - ${
              isDrawerCollapsed ? COLLAPSED_DRAWER_WIDTH : DRAWER_WIDTH
            }px)`,
          },
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ mb: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              {problem.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
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
              />
              <Chip label={problem.category.toUpperCase()} size="small" />
              <Chip label={problem.topic} size="small" variant="outlined" />
            </Box>

            {subjectInfo && (
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  mb: 3,
                  bgcolor: "background.paper",
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  About {problem.topic}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {subjectInfo.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1,
                    color: "text.secondary",
                  }}
                >
                  Key Concepts:
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {subjectInfo.concepts.map((concept, index) => (
                    <Chip
                      key={index}
                      label={concept}
                      size="small"
                      variant="outlined"
                      sx={{
                        bgcolor: "background.paper",
                        "& .MuiChip-label": {
                          fontSize: "0.75rem",
                        },
                      }}
                    />
                  ))}
                </Box>

                {subjectInfo.references && (
                  <>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mt: 2,
                        mb: 1,
                        color: "text.secondary",
                      }}
                    >
                      Learn More:
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {subjectInfo.references.map((ref, index) => (
                        <Button
                          key={index}
                          variant="text"
                          size="small"
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            textTransform: "none",
                            fontSize: "0.75rem",
                          }}
                        >
                          {ref.title}
                        </Button>
                      ))}
                    </Box>
                  </>
                )}
              </Paper>
            )}

            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                }}
              >
                {problem.description}
              </Typography>
            </Paper>
          </Box>

          {problem.starterCode && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 500 }}
              >
                Starter Code
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  bgcolor: "background.paper",
                  borderColor: "divider",
                  "& pre": {
                    bgcolor: "background.default",
                    p: 2,
                    borderRadius: 1,
                    overflow: "auto",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  component="pre"
                  sx={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "monospace",
                    color: "text.primary",
                  }}
                >
                  {problem.starterCode}
                </Typography>
              </Paper>
            </Box>
          )}

          {problem.testCases && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 500 }}
              >
                Test Cases
              </Typography>
              <TableContainer
                component={Paper}
                variant="outlined"
                sx={{
                  bgcolor: "background.paper",
                  borderColor: "divider",
                }}
              >
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: "text.secondary" }}>
                        Input
                      </TableCell>
                      <TableCell sx={{ color: "text.secondary" }}>
                        Expected Output
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {problem.testCases.map((test, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            fontFamily: "monospace",
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {JSON.stringify(test.input)}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "monospace",
                            fontSize: "0.875rem",
                            color: "text.primary",
                          }}
                        >
                          {JSON.stringify(test.expected)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {problem.hint && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 500 }}
              >
                Hint
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  bgcolor: "background.paper",
                  borderColor: "primary.main",
                  "& .MuiTypography-root": {
                    color: "text.primary",
                  },
                }}
              >
                <Typography sx={{ whiteSpace: "pre-wrap" }} component="pre" variant="body2">
                  {problem.hint}
                </Typography>
              </Paper>
            </Box>
          )}

          {/* Solution Section */}
          {problem.solution && (
            <Box sx={{ mt: 4 }}>
              {!showSolution ? (
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    onClick={handleShowSolution}
                    disabled={
                      quotaRemaining === 0 && !viewedSolutions.includes(slug)
                    }
                    startIcon={<VisibilityIcon />}
                    sx={{ mb: 2 }}
                  >
                    {viewedSolutions.includes(slug)
                      ? "Show Solution (Previously Viewed)"
                      : "Show Solution"}
                  </Button>
                  <Typography variant="body2" color="text.secondary">
                    {quotaRemaining} solution{quotaRemaining !== 1 ? "s" : ""}{" "}
                    remaining today
                  </Typography>
                  {quotaRemaining === 0 && !viewedSolutions.includes(slug) && (
                    <Alert severity="info" sx={{ mt: 2 }}>
                      You've reached your daily solution view limit. New
                      solutions will be available tomorrow!
                    </Alert>
                  )}
                </Box>
              ) : (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Solution:
                  </Typography>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      bgcolor: "background.paper",
                      borderColor: "divider",
                      "& pre": {
                        bgcolor: "background.default",
                        p: 2,
                        borderRadius: 1,
                        overflow: "auto",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      component="pre"
                      sx={{
                        whiteSpace: "pre-wrap",
                        fontFamily: "monospace",
                        color: "text.primary",
                      }}
                    >
                      {problem.solution}
                    </Typography>
                  </Paper>
                </Box>
              )}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default ProblemDetail;
