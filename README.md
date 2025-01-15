# CodePath

A structured learning platform for mastering web development through guided paths and hands-on problem solving.

## Live Site

Visit the live site here: [Codepath on GitHub Pages](https://syedsaadh.github.io/codepath)


## What you will learn

- JavaScript
- HTML
- CSS
- Node.js
- Express
- NestJs
- React

## Features

- 📚 Structured learning paths for multiple technologies
- 💻 Hands-on coding problems
- 📊 Progress tracking
- 🎯 Difficulty-based problems
- 💡 Hints and solutions
- ✅ Mark problems as solved/unsolved

## Getting Started

1. **Installation**:
   ```bash
   git clone https://github.com/your-repo/codehub.git
   cd codehub
   npm install
   npm start
   ```

2. **Access**: Open `http://localhost:3000` in your browser

## Solutions Organization

Create a `solutions` directory in your local workspace with the following structure:

```
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
```

### Solution Structure Guidelines

1. **Problem Directory**:
   - Name format: `problem-{id}` (matches the problem ID shown in the app)
   - Example: `problem-1`, `problem-2`

2. **Solution Files**:
   - Main solution file (e.g., `solution.js`, `solution.jsx`)
   - Supporting files (if needed)
   - `README.md` with:
     - Problem description
     - Your approach
     - Time/Space complexity
     - Learning points

3. **Technology-Specific Organization**:
   - React problems: Include component files
   - Node.js problems: Include necessary modules
   - Full-stack problems: Separate frontend/backend directories

Example Problem Solution README:
```markdown
# Problem 1: Component State Management

## Problem Description
Implement a counter component with increment/decrement functionality...

## Approach
Used useState hook for state management...

## Solution Overview
- Created Counter component
- Implemented increment/decrement functions
- Added error handling for limits

## Learning Points
- Better understanding of React state
- Learned about component lifecycle
- Practiced error boundary implementation
```

## Learning Path Structure

The platform organizes content by:
1. Technology (React, Node.js, etc.)
2. Topics (Fundamentals, Advanced, etc.)
3. Problems (Categorized by difficulty)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---

Happy Coding! 🚀
