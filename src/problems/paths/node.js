export const nodeProblems = [
  {
    slug: "create-custom-module",
    title: "Create a Custom Module",
    difficulty: "beginner",
    category: "nodejs",
    topic: "Modules",
    description:
      "Create a custom module named 'mathUtils' that exports a function 'add' to sum two numbers. Import the module in another file and use it.",
    starterCode:
      "// mathUtils.js\n// Add your function here\n\n// index.js\n// Import and use the module here",
    hint: "Use `module.exports` in the module file to export functions and `require` to import the module in another file.",
    solution: `
/* mathUtils.js */
function add(a, b) {
  return a + b;
}

module.exports = { add };

/* index.js */
const { add } = require('./mathUtils');
console.log(add(3, 4)); // Output: 7
`,
  },
  {
    slug: "read-file",
    title: "Read a File",
    difficulty: "beginner",
    category: "nodejs",
    topic: "File System",
    description:
      "Write a Node.js script to read the contents of a file named 'example.txt' and print it to the console.",
    starterCode: "// Add your code here to read the file",
    hint: "Use `fs.readFile` from the 'fs' module to read the file asynchronously.",
    solution: `
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
`,
  },
  {
    slug: "create-event-emitter",
    title: "Create an Event Emitter",
    difficulty: "intermediate",
    category: "nodejs",
    topic: "Events",
    description:
      "Create an EventEmitter instance that emits an event 'greet' with a message. Write a listener to log the message when the event is emitted.",
    starterCode: "// Add your EventEmitter code here",
    hint: "Use the `events` module to create an EventEmitter instance and use `on` to listen for the event.",
    solution: `
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (message) => {
  console.log(message);
});

emitter.emit('greet', 'Hello, Event!');
`,
  },
  {
    slug: "stream-file-content",
    title: "Stream File Content",
    difficulty: "intermediate",
    category: "nodejs",
    topic: "Streams",
    description:
      "Write a script to create a readable stream for a file and pipe its content to the console.",
    starterCode: "// Add your stream code here",
    hint: "Use `fs.createReadStream` to create the readable stream and `pipe` it to `process.stdout`.",
    solution: `
const fs = require('fs');

const readStream = fs.createReadStream('example.txt', 'utf8');
readStream.pipe(process.stdout);
`,
  },
  {
    slug: "http-server-implementation",
    title: "HTTP Server Implementation",
    difficulty: "advanced",
    category: "nodejs",
    topic: "HTTP Module",
    description: `
      Create a basic HTTP server that:
      1. Handles different HTTP methods (GET, POST, PUT, DELETE)
      2. Implements proper routing
      3. Parses request bodies
      4. Sets appropriate response headers
      5. Handles query parameters
      
      Requirements:
      - Create routes for /api/users
      - Implement CRUD operations
      - Handle JSON request/response
      - Implement error handling
      - Add basic request logging
    `,
    starterCode: `
const http = require('http');
const url = require('url');

// Parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    // Implement body parsing
  });
}

// Create server
const server = http.createServer(async (req, res) => {
  // Implement request handling
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
    `,
    hint: "Use url.parse for routing, implement async body parsing, and remember to set proper Content-Type headers.",
    solution: `
const http = require('http');
const url = require('url');

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(JSON.parse(body));
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const method = req.method;

  if (pathname === '/api/users') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ users: [] }));
    } else if (method === 'POST') {
      try {
        const body = await parseBody(req);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created', data: body }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`,
  },
  {
    slug: "buffer-operations",
    title: "Buffer Operations",
    difficulty: "intermediate",
    category: "nodejs",
    topic: "Buffer",
    description: `
      Implement a set of buffer manipulation functions:
      1. createBuffer(text) - creates a buffer from text
      2. concatenateBuffers(buffers) - joins multiple buffers
      3. transformBuffer(buffer) - modifies buffer content
      4. convertToBase64(buffer) - converts to base64
      5. sliceBuffer(buffer, start, end) - extracts portion
      
      Handle different encodings and buffer operations safely.
    `,
    starterCode: `
// Create buffer from text
function createBuffer(text) {
  // Implement buffer creation
}

// Concatenate multiple buffers
function concatenateBuffers(buffers) {
  // Implement buffer concatenation
}

// Transform buffer content
function transformBuffer(buffer) {
  // Implement buffer transformation
}

// Convert to base64
function convertToBase64(buffer) {
  // Implement base64 conversion
}

// Slice buffer
function sliceBuffer(buffer, start, end) {
  // Implement buffer slicing
}
    `,
    hint: "Use Buffer.from() for creation, Buffer.concat() for joining, and remember to handle encodings properly.",
    solution: `
// Create buffer from text
function createBuffer(text) {
  return Buffer.from(text, 'utf8');
}

// Concatenate multiple buffers
function concatenateBuffers(buffers) {
  return Buffer.concat(buffers);
}

// Transform buffer content
function transformBuffer(buffer) {
  return Buffer.from(buffer.toString().toUpperCase());
}

// Convert to base64
function convertToBase64(buffer) {
  return buffer.toString('base64');
}

// Slice buffer
function sliceBuffer(buffer, start, end) {
  return buffer.slice(start, end);
}

// Example usage
const buffer1 = createBuffer('Hello');
const buffer2 = createBuffer(' World');
const concatenated = concatenateBuffers([buffer1, buffer2]);
console.log(concatenated.toString()); // Output: Hello World
console.log(transformBuffer(buffer1).toString()); // Output: HELLO
console.log(convertToBase64(buffer1)); // Output: SGVsbG8=
console.log(sliceBuffer(concatenated, 0, 5).toString()); // Output: Hello
`,
  },
  {
    slug: "node-error-handling-patterns",
    title: "Node Error Handling Patterns",
    difficulty: "advanced",
    category: "nodejs",
    topic: "Node Error Handling",
    description: `
      Implement comprehensive error handling:
      1. Create custom error types
      2. Handle uncaught exceptions
      3. Handle unhandled promise rejections
      4. Implement error logging
      5. Add graceful shutdown
      
      Requirements:
      - Different error types for various scenarios
      - Proper error propagation
      - Async error handling
      - Process cleanup on errors
    `,
    starterCode: `
// Custom error types
class ValidationError extends Error {
  // Implement custom error
}

class DatabaseError extends Error {
  // Implement custom error
}

// Global error handlers
process.on('uncaughtException', (error) => {
  // Handle uncaught exceptions
});

process.on('unhandledRejection', (reason, promise) => {
  // Handle unhandled rejections
});

// Error logging
function logError(error) {
  // Implement error logging
}

// Graceful shutdown
function gracefulShutdown() {
  // Implement cleanup and shutdown
}
    `,
    hint: "Implement proper error hierarchies, use async error handling patterns, and ensure all resources are cleaned up during shutdown.",
    solution: `
// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
  }
}

// Global error handlers
process.on('uncaughtException', (error) => {
  logError(error);
  gracefulShutdown();
});

process.on('unhandledRejection', (reason, promise) => {
  logError(reason);
  gracefulShutdown();
});

// Error logging
function logError(error) {
  console.error('Error:', error);
}

// Graceful shutdown
function gracefulShutdown() {
  console.log('Shutting down gracefully...');
  process.exit(1);
}

// Example usage
try {
  throw new ValidationError('Invalid input');
} catch (error) {
  logError(error);
}
`,
  },
  {
    slug: "npm-package-creation",
    title: "NPM Package Creation",
    difficulty: "intermediate",
    category: "nodejs",
    topic: "NPM",
    description: `
      Create a basic NPM package that:
      1. Has proper package.json configuration
      2. Implements a main module
      3. Includes dependencies
      4. Has scripts for testing
      5. Includes documentation
      
      Requirements:
      - Export utility functions
      - Handle package versioning
      - Include type definitions
      - Add README documentation
    `,
    starterCode: `
// package.json
{
  "name": "my-utility-package",
  "version": "1.0.0",
  // Add configuration
}

// index.js
function utilityFunction() {
  // Implement utility
}

module.exports = {
  // Export functions
};

// README.md
# My Utility Package
// Add documentation
    `,
    hint: "Include all necessary package.json fields, implement semantic versioning, and provide clear documentation with examples.",
    solution: `
// package.json
{
  "name": "my-utility-package",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "dependencies": {},
  "devDependencies": {},
  "description": "A utility package for various functions",
  "keywords": ["utility", "npm"],
  "author": "Your Name",
  "license": "ISC"
}

// index.js
function utilityFunction() {
  console.log('Utility function executed');
}

module.exports = {
  utilityFunction
};

// README.md
# My Utility Package

This package provides utility functions for various tasks.

## Installation

\`\`\`bash
npm install my-utility-package
\`\`\`

## Usage

\`\`\`javascript
const { utilityFunction } = require('my-utility-package');
utilityFunction();
\`\`\`

## License

ISC
`,
  }
];
