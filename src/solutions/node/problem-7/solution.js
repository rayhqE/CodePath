// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

// Global error handlers
process.on("uncaughtException", (error) => {
  logError(error);
  gracefulShutdown();
});

process.on("unhandledRejection", (reason, promise) => {
  logError(reason);
  gracefulShutdown();
});

// Error logging
function logError(error) {
  console.error("Error:", error);
}

// Graceful shutdown
function gracefulShutdown() {
  console.log("Shutting down gracefully...");
  process.exit(1);
}

// Example usage
try {
  throw new ValidationError("Invalid input");
} catch (error) {
  logError(error);
}
