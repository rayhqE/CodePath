export const expressProblems = [
  {
    id: 1,
    slug: "basic-express-routing",
    title: "Basic Express Routing",
    difficulty: "beginner",
    category: "express",
    topic: "Routing",
    description: `
      Create an Express application with the following routes:
      1. GET /users - returns list of users
      2. GET /users/:id - returns a specific user
      3. POST /users - creates a new user
      4. PUT /users/:id - updates a user
      5. DELETE /users/:id - deletes a user

      Each route should send appropriate responses.
    `,
    starterCode: `
const express = require('express');
const app = express();

// Add your routes here

module.exports = app;
    `,
    testCases: [
      {
        input: "GET /users",
        expected: "Array of users"
      },
      {
        input: "GET /users/1",
        expected: "Single user object"
      }
    ],
    hint: "Use express.Router() for better organization and remember to handle different HTTP methods (app.get, app.post, etc.)",
    solution: `
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'John Doe' }];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = app;
    `
  },
  {
    id: 2,
    slug: "express-middleware-chain",
    title: "Express Middleware Chain",
    difficulty: "intermediate",
    category: "express",
    topic: "Middleware",
    description: `
      Create a middleware chain that:
      1. Logs request method and URL
      2. Validates API key in headers
      3. Parses JSON body
      4. Handles errors
      
      Apply these middleware to a simple route that echoes the request body.
    `,
    starterCode: `
const express = require('express');
const app = express();

// Create your middleware functions
function logRequest(req, res, next) {
  // Add logging logic
}

function validateApiKey(req, res, next) {
  // Add validation logic
}

function errorHandler(err, req, res, next) {
  // Add error handling logic
}

// Apply middleware and create route

module.exports = app;
    `,
    testCases: [
      {
        input: { headers: { "api-key": "valid-key" }, body: { test: true } },
        expected: { test: true }
      },
      {
        input: { headers: { "api-key": "invalid-key" } },
        expected: "Unauthorized"
      }
    ],
    hint: "Use app.use() for global middleware, and remember the order matters. Error handling middleware should be last.",
    solution: `
const express = require('express');
const app = express();

app.use(express.json());

function logRequest(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next();
}

function validateApiKey(req, res, next) {
  const apiKey = req.headers['api-key'];
  if (apiKey === 'valid-key') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

app.use(logRequest);
app.use(validateApiKey);

app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.use(errorHandler);

module.exports = app;
    `
  },
  {
    id: 3,
    slug: "serve-static-files",
    title: "Serve Static Files",
    difficulty: "beginner",
    category: "express",
    topic: "Static Files",
    description: `
      Create an Express application that:
      1. Serves static files from a 'public' directory
      2. Serves images from an 'uploads' directory
      3. Sets correct content types
      4. Implements caching headers
      5. Handles 404 for missing files
    `,
    starterCode: `
const express = require('express');
const app = express();

// Configure static file serving

// Handle 404s

module.exports = app;
    `,
    testCases: [
      {
        input: "GET /style.css",
        expected: "CSS file content"
      },
      {
        input: "GET /nonexistent.file",
        expected: "404 Not Found"
      }
    ],
    hint: "Use express.static() middleware and configure options like maxAge for caching. Remember to set proper paths.",
    solution: `
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d'
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  maxAge: '1d'
}));

app.use((req, res, next) => {
  res.status(404).send('File not found');
});

module.exports = app;
    `
  },
  {
    id: 4,
    slug: "template-engine-setup",
    title: "Template Engine Setup",
    difficulty: "intermediate",
    category: "express",
    topic: "Template Engines",
    description: `
      Set up an Express application with EJS template engine:
      1. Configure EJS as the view engine
      2. Create a layout template
      3. Create views for home and about pages
      4. Pass dynamic data to templates
      5. Use partials for header and footer
    `,
    starterCode: `
const express = require('express');
const app = express();

// Configure template engine

// Create routes that render views

module.exports = app;
    `,
    testCases: [
      {
        input: "GET /",
        expected: "Rendered home page with layout"
      },
      {
        input: "GET /about",
        expected: "Rendered about page with layout"
      }
    ],
    hint: "Use app.set('view engine', 'ejs') for configuration, and res.render() to render views. Create a views folder structure.",
    solution: `
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

module.exports = app;
    `
  },
  {
    id: 5,
    slug: "rest-api-crud",
    title: "REST API CRUD",
    difficulty: "intermediate",
    category: "express",
    topic: "REST APIs",
    description: `
      Create a RESTful API for a blog with:
      1. CRUD operations for posts
      2. Proper HTTP status codes
      3. Input validation
      4. Query parameters for filtering
      5. Pagination support
    `,
    starterCode: `
const express = require('express');
const router = express.Router();

// Create your CRUD routes here
// GET /posts
// GET /posts/:id
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id

module.exports = router;
    `,
    testCases: [
      {
        input: "GET /posts?page=1&limit=10",
        expected: "Paginated list of posts"
      },
      {
        input: "POST /posts (invalid data)",
        expected: "400 Bad Request"
      }
    ],
    hint: "Use express-validator for input validation, implement proper error handling, and use query parameters for filtering and pagination.",
    solution: `
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

let posts = [];

router.get('/posts', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const start = (page - 1) * limit;
  const end = page * limit;
  res.json(posts.slice(start, end));
});

router.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

router.post('/posts', [
  check('title').notEmpty(),
  check('content').notEmpty()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

router.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    Object.assign(post, req.body);
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

router.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Post not found');
  }
});

module.exports = router;
    `
  },
  {
    id: 6,
    slug: "jwt-authentication",
    title: "JWT Authentication",
    difficulty: "advanced",
    category: "express",
    topic: "Authentication",
    description: `
      Implement JWT authentication with the following features:
      1. User registration endpoint (/register)
      2. Login endpoint (/login) that returns JWT
      3. Protected route middleware
      4. Token refresh endpoint
      5. Logout functionality
      
      Include password hashing and proper error handling.
    `,
    starterCode: `
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Middleware to verify JWT
function verifyToken(req, res, next) {
  // Add token verification logic
}

// Registration route
router.post('/register', async (req, res) => {
  // Add registration logic
});

// Login route
router.post('/login', async (req, res) => {
  // Add login logic
});

// Protected route example
router.get('/profile', verifyToken, (req, res) => {
  // Add protected route logic
});

module.exports = router;
    `,
    testCases: [
      {
        input: "POST /register (valid data)",
        expected: "User created successfully"
      },
      {
        input: "POST /login (valid credentials)",
        expected: "JWT token"
      },
      {
        input: "GET /profile (no token)",
        expected: "401 Unauthorized"
      }
    ],
    hint: "Use bcrypt for password hashing, jwt.sign() for token creation, and implement proper token verification in middleware.",
    solution: `
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const users = [];
const secretKey = 'your-secret-key';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access Denied');
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
}

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(400).send('Invalid credentials');
  }
});

router.get('/profile', verifyToken, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
    `
  },
  {
    id: 7,
    slug: "mongodb-integration",
    title: "MongoDB Integration",
    difficulty: "advanced",
    category: "express",
    topic: "Database Integration",
    description: `
      Create a MongoDB integration with Express that includes:
      1. Connection setup with mongoose
      2. User schema and model
      3. CRUD operations using mongoose
      4. Proper error handling
      5. Data validation
      
      Implement endpoints for managing user data with proper MongoDB interactions.
    `,
    starterCode: `
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Create User Schema
const userSchema = new mongoose.Schema({
  // Add schema definition
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  // Add connection options
});

// Create CRUD routes
router.get('/users', async (req, res) => {
  // Add list users logic
});

// Add other CRUD routes

module.exports = router;
    `,
    testCases: [
      {
        input: "GET /users",
        expected: "Array of users from MongoDB"
      },
      {
        input: "POST /users (invalid data)",
        expected: "Mongoose validation error"
      }
    ],
    hint: "Use mongoose middleware for validation, implement proper try-catch blocks, and ensure proper database connection handling.",
    solution: `
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model('User', userSchema);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
    `
  },
  {
    id: 8,
    slug: "global-error-handler",
    title: "Global Error Handler",
    difficulty: "intermediate",
    category: "express",
    topic: "Express Error Handling",
    description: `
      Implement a comprehensive error handling system:
      1. Global error handling middleware
      2. Custom error classes
      3. Async error wrapper
      4. Different error responses for development/production
      5. Error logging functionality
      
      Handle various types of errors (validation, database, authentication, etc.).
    `,
    starterCode: `
const express = require('express');
const app = express();

// Custom error class
class AppError extends Error {
  // Add custom error implementation
}

// Async handler wrapper
const asyncHandler = (fn) => {
  // Add wrapper implementation
};

// Global error handler
function errorHandler(err, req, res, next) {
  // Add error handling logic
}

// Example route using error handling
app.get('/users', asyncHandler(async (req, res) => {
  // Add route logic that might throw errors
}));

// Apply error handler last
app.use(errorHandler);

module.exports = app;
    `,
    testCases: [
      {
        input: "GET /users (database error)",
        expected: "500 Internal Server Error with proper format"
      },
      {
        input: "GET /users (validation error)",
        expected: "400 Bad Request with validation details"
      }
    ],
    hint: "Create a custom error class with status codes, implement an async wrapper to catch errors, and provide different error formats for development and production environments.",
    solution: `
const express = require('express');
const app = express();

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
  }
}

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.isOperational ? err.message : 'Something went wrong!'
    });
  }
}

app.get('/users', asyncHandler(async (req, res) => {
  throw new AppError('This route is not yet defined!', 404);
}));

app.use(errorHandler);

module.exports = app;
    `
  }
];
