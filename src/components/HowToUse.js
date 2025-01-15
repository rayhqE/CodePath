import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function HowToUse() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4, bgcolor: 'background.paper', borderColor: 'divider' }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 2 }}>
          <SchoolIcon color="primary" /> How to Use CodePath
        </Typography>

        {/* Learning Path */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon color="primary" fontSize="small" /> Learning Structure
          </Typography>
          <Typography variant="body1" paragraph>
            The platform is organized hierarchically:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              1. Technologies (React, Node.js, etc.)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              2. Topics (Fundamentals, Advanced Patterns, etc.)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              3. Problems (Categorized by difficulty)
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Problem Solving */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
            <TipsAndUpdatesIcon color="primary" fontSize="small" /> Problem Solving
          </Typography>
          <Typography variant="body1" paragraph>
            Each problem includes:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Problem ID (#1, #2, etc.)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Difficulty level (Beginner, Intermediate, Advanced)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Description and requirements
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Hints for guidance
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Test cases to verify your solution
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Solutions Organization */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
            <FolderIcon color="primary" fontSize="small" /> Solutions Organization
          </Typography>
          <Typography variant="body1" paragraph>
            Create your solutions following this structure:
          </Typography>
          <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem' }}>
            <pre style={{ margin: 0 }}>
{`
solutions/
├── javascript/
│   ├── problem-1/
│   │   ├── solution.js
│   │   └── README.md
│   └── problem-2/
│       ├── solution.js
│       └── README.md
├── react/
│   ├── problem-1/
│   │   ├── solution.jsx
│   │   ├── components/
│   │   └── README.md
│   └── problem-2/
│       ├── solution.jsx
│       └── README.md
└── node/
    └── problem-1/
        ├── solution.js
        └── README.md
`}
            </pre>
          </Box>
          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
            Each solution should include:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              1. Main solution file
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              2. Supporting files (if needed)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              3. README.md with your approach and learnings
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Progress Tracking */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon color="primary" fontSize="small" /> Progress Tracking
          </Typography>
          <Typography variant="body1" paragraph>
            Track your learning progress:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Mark problems as solved/unsolved
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • View progress by technology
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Filter solved/unsolved problems
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Review completed problems
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Running Solutions */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
            <PlayArrowIcon color="primary" fontSize="small" /> Running Solutions
          </Typography>

          {/* JavaScript Solutions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              JavaScript
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# Run with Node.js
cd solutions/javascript/problem-{id}
node solution.js

# Run in browser
Open index.html in browser if DOM manipulation is required`}
              </pre>
            </Box>
          </Box>

          {/* React Solutions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              React
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# Create new React app for component problems
npx create-react-app problem-{id}-solution
cd problem-{id}-solution

# Install dependencies
npm install

# Copy your solution
cp ../../solutions/react/problem-{id}/* src/

# Run the app
npm start`}
              </pre>
            </Box>
          </Box>

          {/* Node.js Solutions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              Node.js
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# Install dependencies
cd solutions/nodejs/problem-{id}
npm install

# Run the solution
node solution.js

# For Express/API solutions
npm run dev  # Usually runs nodemon`}
              </pre>
            </Box>
          </Box>

          {/* HTML/CSS Solutions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              HTML/CSS
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# Open in browser
cd solutions/html/problem-{id}
# or
cd solutions/css/problem-{id}

# Open index.html in your browser
# Use Live Server for hot reload:
npx live-server`}
              </pre>
            </Box>
          </Box>

          {/* NestJS Solutions */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              NestJS
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# Install dependencies
cd solutions/nestjs/problem-{id}
npm install

# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Run tests
npm run test`}
              </pre>
            </Box>
          </Box>

          {/* Testing Instructions */}
          <Box>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              Running Tests
            </Typography>
            <Box sx={{ pl: 2, fontFamily: 'monospace', fontSize: '0.875rem', bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`# For Jest tests
npm test

# For specific test file
npm test solution.test.js

# For React Testing Library
npm test -- --watchAll

# For E2E tests (Cypress)
npm run cypress:open`}
              </pre>
            </Box>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Note: Replace {'{id}'} with the actual problem ID shown in the dashboard.
        </Typography>
      </Paper>
    </Container>
  );
}

export default HowToUse; 