export const jsProblems = [
  {
    slug: "variable-types",
    title: "Variable Types",
    difficulty: "beginner",
    category: "javascript",
    topic: "Variables and Data Types",
    description: `
      Create three variables using let, const, and var.
      - Create a variable 'name' using const and assign it your name
      - Create a variable 'age' using let and assign it any number
      - Create a variable 'isStudent' using var and assign it a boolean
      
      Return an object containing these three variables.
    `,
    starterCode: `
function declareVariables() {
  // Write your code here
}`,
    solution: `
function declareVariables() {
  const name = "John";
  let age = 25;
  var isStudent = true;
  return { name, age, isStudent };
}`,
    testCases: [
      {
        input: [],
        expected: { name: "John", age: 25, isStudent: true },
      },
    ],
  },
  {
    slug: "basic-operators",
    title: "Basic Operators",
    difficulty: "beginner",
    category: "javascript",
    topic: "Operators",
    description: `
      Create a function that performs basic arithmetic operations:
      1. Add two numbers
      2. Multiply the result by 2
      3. Subtract 5
      4. Return the final result
      
      Example:
      calculate(3, 4) // should return ((3 + 4) * 2) - 5 = 9
    `,
    starterCode: `
function calculate(a, b) {
  // Write your code here
}`,
    solution: `
function calculate(a, b) {
  return ((a + b) * 2) - 5;
}`,
    testCases: [
      {
        input: [3, 4],
        expected: 9,
      },
      {
        input: [1, 1],
        expected: -1,
      },
    ],
  },
  {
    slug: "control-flow-challenge",
    title: "Control Flow Challenge",
    difficulty: "beginner",
    category: "javascript",
    topic: "Control Flow",
    description: `
      Create a function that determines if a year is a leap year.
      A year is a leap year if:
      - It's divisible by 4 AND
      - It's NOT divisible by 100 OR it's divisible by 400
      
      Return true for leap years, false otherwise.
      
      Example:
      isLeapYear(2000) // true
      isLeapYear(2100) // false
    `,
    starterCode: `
function isLeapYear(year) {
  // Write your code here
}`,
    solution: `
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}`,
    testCases: [
      {
        input: [2000],
        expected: true,
      },
      {
        input: [2100],
        expected: false,
      },
    ],
  },
  // Day 2: Functions & Arrays
  {
    slug: "function-expression",
    title: "Function Expression",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Function Expression",
    description: `
      Create a calculator using function expressions.
      Return an object with four function expressions:
      - add(a, b)
      - subtract(a, b)
      - multiply(a, b)
      - divide(a, b)
      
      Example:
      const calc = createCalculator();
      calc.add(2, 3) // 5
    `,
    starterCode: `
function createCalculator() {
  // Write your code here
}`,
    solution: `
function createCalculator() {
  return {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    multiply: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; }
  };
}`,
    testCases: [
      {
        input: [],
        expected: {
          add: Function,
          subtract: Function,
          multiply: Function,
          divide: Function,
        },
      },
    ],
  },
  {
    slug: "arrow-function-transform",
    title: "Arrow Function Transform",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Arrow Functions",
    description: `
      Create an arrow function that takes an array of numbers and:
      1. Doubles each number
      2. Filters out numbers less than 10
      3. Returns the sum of remaining numbers
      
      Use arrow functions and array methods.
      
      Example:
      processNumbers([2, 5, 8, 1, 9]) // should return 20 (only 16 and 18 remain after filtering)
    `,
    starterCode: `
const processNumbers = // Write your arrow function here`,
    solution: `
const processNumbers = arr => 
  arr
    .map(n => n * 2)
    .filter(n => n >= 10)
    .reduce((sum, n) => sum + n, 0);`,
    testCases: [
      {
        input: [[2, 5, 8, 1, 9]],
        expected: 20,
      },
    ],
  },
  // Day 3: Objects & DOM
  {
    slug: "object-methods",
    title: "Object Methods",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Object Methods",
    description: `
      Create a bank account object with methods:
      - deposit(amount)
      - withdraw(amount)
      - getBalance()
      
      The account should:
      - Start with 0 balance
      - Not allow negative balance
      - Return transaction status
      
      Example:
      const account = createAccount();
      account.deposit(100) // { success: true, balance: 100 }
    `,
    starterCode: `
function createAccount() {
  // Write your code here
}`,
    solution: `
function createAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      return { success: true, balance };
    },
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        return { success: true, balance };
      }
      return { success: false, balance, message: 'Insufficient funds' };
    },
    getBalance() {
      return balance;
    }
  };
}`,
    testCases: [
      {
        input: [],
        expected: {
          deposit: Function,
          withdraw: Function,
          getBalance: Function,
        },
      },
    ],
  },
  // Day 4: ES6+ Features
  {
    slug: "destructuring-challenge",
    title: "Destructuring Challenge",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Destructuring",
    description: `
      Create a function that takes a nested object and array.
      Use destructuring to extract specific values and return them.
      
      The input will be:
      - An object with user details (name, address: { city, country })
      - An array of scores [math, science, history]
      
      Return an object with:
      - userName (from name)
      - userCity (from city)
      - bestScore (highest score from array)
      
      Example:
      const user = { name: "John", address: { city: "NY", country: "USA" } };
      const scores = [85, 92, 88];
      extractInfo(user, scores) // { userName: "John", userCity: "NY", bestScore: 92 }
    `,
    starterCode: `
function extractInfo(user, scores) {
  // Write your code here
}`,
    solution: `
function extractInfo(user, scores) {
  const { name: userName, address: { city: userCity } } = user;
  const bestScore = Math.max(...scores);
  return { userName, userCity, bestScore };
}`,
    testCases: [
      {
        input: [
          { name: "John", address: { city: "NY", country: "USA" } },
          [85, 92, 88],
        ],
        expected: { userName: "John", userCity: "NY", bestScore: 92 },
      },
    ],
  },
  // Day 5: Async Programming
  {
    slug: "async-await-challenge",
    title: "Async/Await Challenge",
    difficulty: "advanced",
    category: "javascript",
    topic: "Async/Await",
    description: `
      Create an async function that simulates fetching user data:
      1. First fetch user profile (simulate delay)
      2. Then fetch user's posts (simulate delay)
      3. Finally fetch post comments (simulate delay)
      
      Handle errors appropriately using try/catch.
      
      Example:
      getUserData(1).then(data => console.log(data))
      // Should return { user: {...}, posts: [...], comments: [...] }
    `,
    starterCode: `
async function getUserData(userId) {
  // Simulated API calls
  const fetchProfile = id => new Promise(resolve => 
    setTimeout(() => resolve({ id, name: "John" }), 100));
  const fetchPosts = id => new Promise(resolve => 
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100));
  const fetchComments = postId => new Promise(resolve => 
    setTimeout(() => resolve([{ id: 1, text: "Comment 1" }]), 100));

  // Write your code here
}`,
    solution: `
async function getUserData(userId) {
  try {
    const user = await fetchProfile(userId);
    const posts = await fetchPosts(userId);
    const comments = await Promise.all(
      posts.map(post => fetchComments(post.id))
    );
    return { user, posts, comments: comments.flat() };
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
}`,
    testCases: [
      {
        input: [1],
        expected: {
          user: { id: 1, name: "John" },
          posts: [{ id: 1, title: "Post 1" }],
          comments: [{ id: 1, text: "Comment 1" }],
        },
        isAsync: true,
      },
    ],
  },
  // Additional Problems

  {
    slug: "array-methods",
    title: "Array Methods",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Array Methods",
    description: `
      Create a function that takes an array of numbers and returns a new array with all numbers doubled.
      
      Example:
      doubleNumbers([1, 2, 3]) // should return [2, 4, 6]
    `,
    starterCode: `
function doubleNumbers(arr) {
  // Write your code here
}`,
    solution: `
function doubleNumbers(arr) {
  return arr.map(n => n * 2);
}`,
    testCases: [
      {
        input: [[1, 2, 3]],
        expected: [2, 4, 6],
      },
    ],
  },
  {
    slug: "loops",
    title: "Loops",
    difficulty: "beginner",
    category: "javascript",
    topic: "Loops",
    description: `
      Create a function that takes an array of numbers and returns the sum of all numbers.
      
      Example:
      sumOfNumbers([1, 2, 3]) // should return 6
    `,
    starterCode: `
function sumOfNumbers(arr) {
  // Write your code here
}`,
    solution: `
function sumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`,
    testCases: [
      {
        input: [[1, 2, 3]],
        expected: 6,
      },
    ],
  },
  {
    slug: "object-literals",
    title: "Object Literals",
    difficulty: "beginner",
    category: "javascript",
    topic: "Object Literals",
    description: `
      Create a function that takes a name and age as parameters and returns an object with these properties.
      
      Example:
      createUser("John", 25) // should return { name: "John", age: 25 }
    `,
    starterCode: `
function createUser(name, age) {
  // Write your code here
}`,
    solution: `
function createUser(name, age) {
  return { name, age };
}`,
    testCases: [
      {
        input: ["John", 25],
        expected: { name: "John", age: 25 },
      },
    ],
  },
  {
    slug: "dom-manipulation",
    title: "DOM Manipulation",
    difficulty: "intermediate",
    category: "javascript",
    topic: "DOM Manipulation",
    description: `
      Create a function that takes a string and appends it to the body of the HTML document.
      
      Example:
      appendToBody("Hello World") // should append "Hello World" to the body of the HTML document
    `,
    starterCode: `
function appendToBody(text) {
  // Write your code here
}`,
    solution: `
function appendToBody(text) {
  document.body.innerHTML += text;
}`,
    testCases: [
      {
        input: ["Hello World"],
        expected: "Hello World",
      },
    ],
  },
  {
    slug: "event-handling",
    title: "Event Handling",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Event Handling",
    description: `
      Create a function that adds an event listener to a button with the id "clickMe". When clicked, it should alert "Button clicked".
      
      Example:
      addEventListenerToButton() // should add an event listener to the button with id "clickMe"
    `,
    starterCode: `
function addEventListenerToButton() {
  // Write your code here
}`,
    solution: `
function addEventListenerToButton() {
  document.getElementById("clickMe").addEventListener("click", function() {
    alert("Button clicked");
  });
}`,
    testCases: [
      {
        input: [],
        expected: "Button clicked",
      },
    ],
  },
  {
    slug: "let-const",
    title: "Let/Const",
    difficulty: "beginner",
    category: "javascript",
    topic: "Variables",
    description: `
      Create a function that takes a string and returns it in uppercase.
      
      Example:
      toUpperCase("hello") // should return "HELLO"
    `,
    starterCode: `
function toUpperCase(str) {
  // Write your code here
}`,
    solution: `
function toUpperCase(str) {
  return str.toUpperCase();
}`,
    testCases: [
      {
        input: ["hello"],
        expected: "HELLO",
      },
    ],
  },
  {
    slug: "template-literals",
    title: "Template Literals",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Template Literals",
    description: `
      Create a function that takes a name and age as parameters and returns a string in the format "Name: [name], Age: [age]".
      
      Example:
      formatString("John", 25) // should return "Name: John, Age: 25"
    `,
    starterCode: `
function formatString(name, age) {
  // Write your code here
}`,
    solution: `
function formatString(name, age) {
  return \`Name: \${name}, Age: \${age}\`;
}`,
    testCases: [
      {
        input: ["John", 25],
        expected: "Name: John, Age: 25",
      },
    ],
  },
  {
    slug: "spread-rest-operators",
    title: "Spread/Rest Operators",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Spread/Rest Operators",
    description: `
      Create two functions:
      1. combineArrays(...arrays) - combines multiple arrays using spread operator
      2. filterNumbers(min, max, ...numbers) - filters numbers between min and max using rest parameter
      
      Example:
      combineArrays([1, 2], [3, 4], [5, 6]) // [1, 2, 3, 4, 5, 6]
      filterNumbers(3, 7, 1, 4, 8, 6, 2, 5) // [4, 6, 5]
    `,
    starterCode: `
function combineArrays(...arrays) {
  // Write your code here
}

function filterNumbers(min, max, ...numbers) {
  // Write your code here
}`,
    solution: `
function combineArrays(...arrays) {
  return [].concat(...arrays);
}

function filterNumbers(min, max, ...numbers) {
  return numbers.filter(num => num > min && num < max);
}`,
    testCases: [
      {
        input: [
          [
            [1, 2],
            [3, 4],
            [5, 6],
          ],
        ],
        expected: [1, 2, 3, 4, 5, 6],
        functionName: "combineArrays",
      },
      {
        input: [3, 7, 1, 4, 8, 6, 2, 5],
        expected: [4, 6, 5],
        functionName: "filterNumbers",
      },
    ],
  },
  {
    slug: "callback-handling",
    title: "Callback Handling",
    difficulty: "intermediate",
    category: "javascript",
    topic: "Callbacks",
    description: `
      Create a function processUserData that:
      1. Takes a user object and two callbacks (success and error)
      2. Validates user has name and age properties
      3. If valid, calls success callback with formatted string
      4. If invalid, calls error callback with error message
      
      Example:
      processUserData(
        { name: "John", age: 25 },
        (msg) => console.log(msg),
        (err) => console.error(err)
      )
    `,
    starterCode: `
function processUserData(user, successCallback, errorCallback) {
  // Write your code here
}`,
    solution: `
function processUserData(user, successCallback, errorCallback) {
  if (!user.name || !user.age) {
    errorCallback("Invalid user data: missing required fields");
    return;
  }
  
  const message = \`User \${user.name} is \${user.age} years old\`;
  successCallback(message);
}`,
    testCases: [
      {
        input: [{ name: "John", age: 25 }, (msg) => msg, (err) => err],
        expected: "User John is 25 years old",
      },
      {
        input: [{ name: "John" }, (msg) => msg, (err) => err],
        expected: "Invalid user data: missing required fields",
      },
    ],
  },
  {
    id: 19,
    slug: "promise-chaining",
    title: "Promise Chaining",
    difficulty: "advanced",
    category: "javascript",
    topic: "Promises",
    description: `
      Create a series of functions that return promises:
      1. fetchUser(id) - simulates fetching user data
      2. fetchPosts(userId) - simulates fetching user's posts
      3. fetchComments(postId) - simulates fetching post's comments
      
      Chain these promises to get a user's first post's first comment.
      
      Example:
      fetchUser(1)
        .then(user => fetchPosts(user.id))
        .then(posts => fetchComments(posts[0].id))
        .then(comments => comments[0].text)
    `,
    starterCode: `
function fetchUser(id) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John" });
    }, 100);
  });
}

function fetchPosts(userId) {
  // Write your code here
}

function fetchComments(postId) {
  // Write your code here
}

function getFirstComment(userId) {
  // Chain the promises here
}`,
    solution: `
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John" });
    }, 100);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, title: "Post 1" },
        { id: 2, userId: userId, title: "Post 2" }
      ]);
    }, 100);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId: postId, text: "First comment" },
        { id: 2, postId: postId, text: "Second comment" }
      ]);
    }, 100);
  });
}

function getFirstComment(userId) {
  return fetchUser(userId)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => comments[0].text);
}`,
    testCases: [
      {
        input: [1],
        expected: "First comment",
        isAsync: true,
      },
    ],
  },
  {
    id: 21,
    slug: "function-declaration-basics",
    title: "Function Declaration Basics",
    difficulty: "beginner",
    category: "javascript",
    topic: "Function Declaration",
    description: `
      Create three functions using function declarations:
      1. calculateArea(width, height) - calculates rectangle area
      2. isEven(number) - checks if a number is even
      3. greetUser(name, time) - returns greeting based on time of day
      
      Examples:
      calculateArea(5, 3) // returns 15
      isEven(4) // returns true
      greetUser("John", "morning") // returns "Good morning, John!"
      greetUser("Jane", "evening") // returns "Good evening, Jane!"
    `,
    starterCode: `
function calculateArea(width, height) {
  // Write your code here
}

function isEven(number) {
  // Write your code here
}

function greetUser(name, time) {
  // Write your code here
}`,
    solution: `
function calculateArea(width, height) {
  return width * height;
}

function isEven(number) {
  return number % 2 === 0;
}

function greetUser(name, time) {
  return \`Good \${time}, \${name}!\`;
}`,
    testCases: [
      {
        input: [5, 3],
        expected: 15,
        functionName: "calculateArea",
      },
      {
        input: [4],
        expected: true,
        functionName: "isEven",
      },
      {
        input: [3],
        expected: false,
        functionName: "isEven",
      },
      {
        input: ["John", "morning"],
        expected: "Good morning, John!",
        functionName: "greetUser",
      },
      {
        input: ["Jane", "evening"],
        expected: "Good evening, Jane!",
        functionName: "greetUser",
      },
    ],
    hint: "Remember that function declarations are hoisted and can be called before they are defined in the code.",
  },
  {
    id: 22,
    slug: "error-handling-patterns",
    title: "Error Handling Patterns",
    difficulty: "intermediate",
    category: "javascript",
    topic: "JS Error Handling",
    description: `
      Create a robust error handling system with the following requirements:

      1. Create a custom error class 'ValidationError' that extends Error
      2. Implement a function 'validateUser' that validates user data
      3. Implement an async function 'saveUser' that simulates saving to database
      4. Create a function 'processUser' that uses try-catch to handle different types of errors
      5. Implement proper error propagation

      The system should handle:
      - Validation errors (invalid email, missing fields)
      - Network errors (connection timeout)
      - Database errors (duplicate entry)
      - Unexpected errors
    `,
    starterCode: `
// Custom Error Class
class ValidationError extends Error {
  // Implement custom error
}

// Validation Function
function validateUser(userData) {
  // Add validation logic
  // Throw ValidationError for invalid data
}

// Simulated Async Operation
async function saveUser(userData) {
  // Add save logic
  // Simulate different errors
}

// Main Process Function
async function processUser(userData) {
  try {
    // Implement user processing
  } catch (error) {
    // Handle different types of errors
  }
}

// Example usage:
// processUser({
//   email: "test@example.com",
//   name: "John Doe",
//   age: 25
// });
`,
    testCases: [
      {
        input: [{ email: "invalid-email", name: "John" }],
        expected: "ValidationError: Invalid email format",
      },
      {
        input: [{ email: "test@example.com" }],
        expected: "ValidationError: Name is required",
      },
      {
        input: [{ email: "existing@example.com", name: "John" }],
        expected: "DatabaseError: User already exists",
      },
      {
        input: [{ email: "timeout@example.com", name: "John" }],
        expected: "NetworkError: Connection timeout",
      },
      {
        input: [{ email: "test@example.com", name: "John" }],
        expected: "Success: User processed successfully",
      },
    ],
    hint: `
      Tips:
      1. Use instanceof to check error types
      2. Include error codes and status in custom errors
      3. Implement proper error messages
      4. Use async/await with try-catch
      5. Consider creating an error factory function
      6. Remember to propagate errors when needed
    `,
  },
  {
    slug: "array-sorting",
    title: "Array Sorting",
    difficulty: "beginner",
    category: "javascript",
    topic: "Loops",
    description: `
      Create a function that takes an array of numbers and returns the sorted array.

      Example:
      arraySort([1, 2, 3, 4]) // should return [1, 2, 3, 4]
    `,
    starterCode: `
function arraySort(arr) {
  // Write your code here
}`,
    solution: `
function arraySort(arr) {
  return arr.sort((a, b) => a - b);
}`,
    testCases: [
      {
        input: [[4, 3, 2, 1]],
        expected: [1, 2, 3, 4],
      },
      {
        input: [[15, 10, 5]],
        expected: [5, 10, 15],
      },
      {
        input: [[0, 0, 0]],
        expected: [0, 0, 0],
      },
    ],
  },
];
