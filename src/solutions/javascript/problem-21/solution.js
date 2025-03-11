// Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Validation Function
function validateUser(userData) {
  if (!userData.name) throw new ValidationError("Name is required");
  if (!userData.email) throw new ValidationError("Email is required");
  if (!/\S+@\S+\.\S+/.test(userData.email))
    throw new ValidationError("Invalid email format");
  if (!userData.age || typeof userData.age !== "number" || userData.age <= 0) {
    throw new ValidationError("Invalid age");
  }
}

// Simulated Async Operation
async function saveUser(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email === "duplicate@example.com") {
        reject(new Error("Duplicate entry")); // Database error
      } else if (Math.random() > 0.7) {
        reject(new Error("Connection timeout")); // Network error
      } else {
        resolve("User saved successfully");
      }
    }, 1000);
  });
}

// Main Process Function
async function processUser(userData) {
  try {
    validateUser(userData);
    const result = await saveUser(userData);
    console.log(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation Error: ${error.message}`);
    } else if (error.message === "Duplicate entry") {
      console.error("Database Error: Duplicate entry detected");
    } else if (error.message === "Connection timeout") {
      console.error("Network Error: Connection timeout occurred");
    } else {
      console.error(`Unexpected Error: ${error.message}`);
    }
  }
}

// Example usage:
processUser({
  email: "test@example.com",
  name: "John Doe",
  age: 25,
});

processUser({
  email: "duplicate@example.com",
  name: "Jane Doe",
  age: 30,
});

processUser({
  email: "invalid-email",
  name: "Invalid User",
  age: 20,
});
