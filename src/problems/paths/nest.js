export const nestProblems = [
  {
    id: 25,
    slug: "create-nestjs-controller",
    title: "Create a NestJS Controller",
    difficulty: "beginner",
    category: "nestjs",
    topic: "Controllers",
    description:
      "Create a NestJS controller with a GET route '/' that returns 'Hello, NestJS!'.",
    starterCode: "// Add your controller code here",
    hint: "Use the `@Controller` and `@Get` decorators to define the controller and route.",
    testCases: [{ input: ["GET /"], expected: "Hello, NestJS!" }],
  },
  {
    id: 26,
    slug: "implement-dependency-injection",
    title: "Implement Dependency Injection",
    difficulty: "intermediate",
    category: "nestjs",
    topic: "Dependency Injection",
    description:
      "Create a service that provides a message and inject it into a controller to return the message via a GET route.",
    starterCode: "// Add your service and controller code here",
    hint: "Use the `@Injectable` decorator for the service and inject it into the controller's constructor.",
    testCases: [{ input: ["GET /message"], expected: "Provided message" }],
  },
  {
    id: 27,
    slug: "add-guards-to-protect-routes",
    title: "Add Guards to Protect Routes",
    difficulty: "advanced",
    category: "nestjs",
    topic: "Guards",
    description:
      "Add a guard to a route that restricts access based on a condition (e.g., user role).",
    starterCode: "// Add your guard and route setup here",
    hint: "Use the `@CanActivate` interface and apply the guard using the `@UseGuards` decorator.",
    testCases: [
      {
        input: ["GET /protected"],
        expected: "Access granted for authorized users",
      },
    ],
  },
  {
    id: 28,
    slug: "connect-to-a-database-with-typeorm",
    title: "Connect to a Database with TypeORM",
    difficulty: "advanced",
    category: "nestjs",
    topic: "TypeORM Integration",
    description:
      "Set up a TypeORM connection and create an entity for a 'User' with fields 'id', 'name', and 'email'.",
    starterCode: "// Add your TypeORM configuration and entity code here",
    hint: "Use the `@Entity` decorator for the model and configure TypeORM in the app module.",
    testCases: [
      {
        input: ["Create User"],
        expected: "User created and saved in the database",
      },
    ],
  },
  {
    id: 29,
    slug: "create-a-provider",
    title: "Create a Provider",
    difficulty: "intermediate",
    category: "nestjs",
    topic: "Providers",
    description: "Create a provider that injects a value into a controller.",
    starterCode: "// Add your provider and controller code here",
    hint: "Use the `@Injectable` decorator for the provider and inject it into the controller's constructor.",
    testCases: [
      { input: ["GET /provider"], expected: "Injected value from provider" },
    ],
  },
  {
    id: 30,
    slug: "configure-modules",
    title: "Configure Modules",
    difficulty: "intermediate",
    category: "nestjs",
    topic: "Modules",
    description: "Configure a module to import and export components.",
    starterCode: "// Add your module configuration here",
    hint: "Use the `@Module` decorator to define the module and specify imports and exports.",
    testCases: [
      {
        input: [],
        expected: "Module configuration with imports and exports",
      },
    ],
  },
  {
    id: 31,
    slug: "use-interceptors",
    title: "Use Interceptors",
    difficulty: "advanced",
    category: "nestjs",
    topic: "Interceptors",
    description: "Implement an interceptor to log incoming requests.",
    starterCode: "// Add your interceptor code here",
    hint: "Use the `@SetMetadata` decorator to set metadata and the `@UseInterceptors` decorator to apply the interceptor.",
    testCases: [
      {
        input: ["GET /intercepted"],
        expected: "Request logged by interceptor",
      },
    ],
  },
  {
    id: 32,
    slug: "create-pipes",
    title: "Create Pipes",
    difficulty: "advanced",
    category: "nestjs",
    topic: "Pipes",
    description: "Create a pipe to validate and transform incoming data.",
    starterCode: "// Add your pipe code here",
    hint: "Use the `@Pipe` decorator to define the pipe and apply it using the `@UsePipes` decorator.",
    testCases: [
      {
        input: ["POST /validated"],
        expected: "Data validated and transformed by pipe",
      },
    ],
  },
];
