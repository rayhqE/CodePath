export const reactProblems = [
  // JSX Syntax
  {
    slug: "jsx-basic-rules",
    title: "JSX Basic Rules",
    difficulty: "beginner",
    category: "react",
    topic: "JSX Syntax",
    description: `
      Convert the following HTML into valid JSX:

      <div class="profile-card">
        <img src="avatar.jpg" class="profile-img">
        <h2 class="name">John Doe</h2>
        <p class="title">Software Developer</p>
        <label for="email">Email:</label>
        <input type="email" id="email">
        <div style="color: blue; font-size: 16px">Contact Info</div>
      </div>

      Requirements:
      1. Convert all class attributes to className
      2. Close all self-closing tags
      3. Convert inline styles to JSX style object
      4. Handle the htmlFor attribute
      5. Ensure all quotes are consistent (use single or double)
    `,
    hint: `
      Key points to remember:
      - className instead of class
      - Self-closing tags need forward slash: <img />
      - Style objects use camelCase: fontSize instead of font-size
      - Style values need quotes: "16px"
      - htmlFor instead of for attribute
      - Use curly braces for JavaScript expressions
    `,
    solution: `
      const ProfileCard = () => (
        <div className="profile-card">
          <img src="avatar.jpg" className="profile-img" />
          <h2 className="name">John Doe</h2>
          <p className="title">Software Developer</p>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <div style={{ color: 'blue', fontSize: '16px' }}>Contact Info</div>
        </div>
      );
    `,
  },

  // Components
  {
    slug: "first-component",
    title: "Create Your First Component",
    difficulty: "beginner",
    category: "react",
    topic: "Components",
    description: `
      Create a UserCard component that displays user information:

      Requirements:
      1. Component should be a function component
      2. Display user's name, title, and company
      3. Add a profile picture
      4. Style the card with CSS
      5. Add a "Contact" button at the bottom

      The card should look professional and be centered on the page.
      Use appropriate semantic HTML elements.
    `,
    hint: `
      Structure tips:
      - Use a container div with display: flex or grid
      - Consider using Card-like structure
      - Remember to organize related styles together
      - Use semantic tags like <article> for the card
      - Consider component organization and readability
      - Add hover effects for better UX
    `,
    solution: `
      const UserCard = ({ name, title, company, profilePicture }) => (
        <article className="user-card">
          <img src={profilePicture} alt={name} className="user-card__img" />
          <h2 className="user-card__name">{name}</h2>
          <p className="user-card__title">{title} at {company}</p>
          <button className="user-card__contact-btn">Contact</button>
        </article>
      );
    `,
  },

  // Props
  {
    slug: "props-basics",
    title: "Working with Props",
    difficulty: "beginner",
    category: "react",
    topic: "Props",
    description: `
      Create a Button component that accepts various props:

      Required Props:
      - text: The button text
      - onClick: Click handler function
      - variant: 'primary' | 'secondary' | 'danger'

      Optional Props:
      - size: 'small' | 'medium' | 'large'
      - disabled: boolean
      - icon: React node to show before text

      The button should have different styles based on variant and size.
      Add hover and active states for better UX.
    `,
    hint: `
      Implementation tips:
      - Use PropTypes for type checking
      - Provide default props for optional values
      - Use template literals for dynamic classNames
      - Consider using styled-components or CSS modules
      - Remember to handle disabled state styles
      - Use proper TypeScript types if using TS
    `,
    solution: `
      const Button = ({ text, onClick, variant = 'primary', size = 'medium', disabled = false, icon }) => (
        <button
          className={\`btn btn--\${variant} btn--\${size}\`}
          onClick={onClick}
          disabled={disabled}
        >
          {icon && <span className="btn__icon">{icon}</span>}
          {text}
        </button>
      );
    `,
  },

  // State Management
  {
    slug: "counter-state",
    title: "Counter with State",
    difficulty: "beginner",
    category: "react",
    topic: "State Management",
    description: `
      Create a Counter component with the following features:

      Requirements:
      1. Display current count
      2. Increment button
      3. Decrement button (don't go below 0)
      4. Reset button
      5. Step input to control increment/decrement amount
      6. Display whether count is even or odd

      Bonus:
      - Add animation when count changes
      - Add max value limit (e.g., 10)
      - Add color change based on value
    `,
    hint: `
      State management tips:
      - Use useState for count and step
      - Consider using multiple state variables
      - Use callback form of setState when new state depends on old
      - Add input validation for step value
      - Consider using useEffect for side effects
      - Remember to handle edge cases
    `,
    solution: `
      import React, { useState } from 'react';

      const Counter = () => {
        const [count, setCount] = useState(0);
        const [step, setStep] = useState(1);

        const increment = () => setCount(prevCount => Math.min(prevCount + step, 10));
        const decrement = () => setCount(prevCount => Math.max(prevCount - step, 0));
        const reset = () => setCount(0);

        return (
          <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <input
              type="number"
              value={step}
              onChange={e => setStep(Number(e.target.value))}
              min="1"
            />
            <p>{count % 2 === 0 ? 'Even' : 'Odd'}</p>
          </div>
        );
      };
    `,
  },

  // Event Handling
  {
    slug: "react-form-events",
    title: "React Form Event Handling",
    difficulty: "beginner",
    category: "react",
    topic: "React Form Event Handling",
    description: `
      Create a registration form with proper event handling:

      Form Fields:
      - Username (required, min 3 chars)
      - Email (required, valid email)
      - Password (required, min 8 chars, one number)
      - Confirm Password (must match)
      - Terms acceptance checkbox

      Requirements:
      1. Real-time validation
      2. Show validation errors
      3. Handle form submission
      4. Prevent default behavior
      5. Disable submit when invalid
    `,
    hint: `
      Event handling tips:
      - Use controlled components
      - Create separate validation functions
      - Consider using form state object
      - Add proper keyboard event handling
      - Use onBlur for validation
      - Consider using a validation library
      - Remember accessibility
    `,
    solution: `
      import React, { useState } from 'react';

      const RegistrationForm = () => {
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          termsAccepted: false
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
          });
        };

        const validate = () => {
          const newErrors = {};
          if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
          if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
          if (formData.password.length < 8 || !/\d/.test(formData.password)) newErrors.password = 'Password must be at least 8 characters and contain a number';
          if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
          if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms';
          return newErrors;
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          const validationErrors = validate();
          if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted', formData);
          } else {
            setErrors(validationErrors);
          }
        };

        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
            {errors.username && <p>{errors.username}</p>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && <p>{errors.password}</p>}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              Accept Terms
            </label>
            {errors.termsAccepted && <p>{errors.termsAccepted}</p>}
            <button type="submit" disabled={Object.keys(errors).length > 0}>Register</button>
          </form>
        );
      };
    `,
  },

  // Component Lifecycle
  {
    slug: "lifecycle-data-fetching",
    title: "Data Fetching & Lifecycle",
    difficulty: "intermediate",
    category: "react",
    topic: "Component Lifecycle",
    description: `
      Create a UserProfile component that handles data fetching and lifecycle:

      Requirements:
      1. Fetch user data when component mounts
      2. Show loading state while fetching
      3. Handle and display errors appropriately
      4. Clean up any subscriptions when unmounting
      5. Add refresh button to reload data
      6. Show last updated timestamp

      API Endpoint: https://api.example.com/users/{userId}

      Bonus:
      - Add error retry mechanism
      - Implement data caching
      - Add loading skeleton
    `,
    hint: `
      Lifecycle management tips:
      - Use useEffect for data fetching
      - Clean up with return function
      - Use AbortController for fetch cleanup
      - Track component mounted state
      - Handle race conditions
      - Consider using async state machine
      - Implement proper error boundaries
    `,
    solution: `
      import React, { useState, useEffect } from 'react';

      const UserProfile = ({ userId }) => {
        const [userData, setUserData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
          const controller = new AbortController();
          const fetchData = async () => {
            try {
              const response = await fetch(\`https://api.example.com/users/\${userId}\`, { signal: controller.signal });
              if (!response.ok) throw new Error('Network response was not ok');
              const data = await response.json();
              setUserData(data);
            } catch (err) {
              if (err.name !== 'AbortError') {
                setError(err);
              }
            } finally {
              setLoading(false);
            }
          };

          fetchData();

          return () => {
            controller.abort();
          };
        }, [userId]);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <div>
            <h1>{userData.name}</h1>
            <p>Email: {userData.email}</p>
            <button onClick={() => window.location.reload()}>Refresh</button>
          </div>
        );
      };
    `,
  },

  // Conditional Rendering
  {
    slug: "conditional-rendering-patterns",
    title: "Conditional Rendering Patterns",
    difficulty: "intermediate",
    category: "react",
    topic: "Conditional Rendering",
    description: `
      Create a Dashboard component that demonstrates different conditional rendering patterns:

      Components to Render:
      1. WelcomeMessage (if user is new)
      2. NotificationList (if has notifications)
      3. UpgradeBanner (if free tier)
      4. MainContent (always)
      5. LoadingSpinner (while loading)
      6. ErrorMessage (if error exists)

      Implement at least 3 different conditional rendering patterns:
      - && operator
      - Ternary operator
      - Early return
      - Switch statement
      - Enum pattern
    `,
    hint: `
      Conditional rendering tips:
      - Choose appropriate pattern for complexity
      - Consider component readability
      - Handle all possible states
      - Use guard clauses when appropriate
      - Consider extraction for complex logic
      - Remember null/undefined checks
      - Keep JSX clean and maintainable
    `,
    solution: `
      import React from 'react';

      const Dashboard = ({ isNewUser, hasNotifications, isFreeTier, isLoading, error }) => {
        if (isLoading) return <LoadingSpinner />;
        if (error) return <ErrorMessage error={error} />;

        return (
          <div>
            {isNewUser && <WelcomeMessage />}
            {hasNotifications ? <NotificationList /> : <p>No new notifications</p>}
            {isFreeTier && <UpgradeBanner />}
            <MainContent />
          </div>
        );
      };

      const LoadingSpinner = () => <div>Loading...</div>;
      const ErrorMessage = ({ error }) => <div>Error: {error.message}</div>;
      const WelcomeMessage = () => <div>Welcome to the platform!</div>;
      const NotificationList = () => <div>You have new notifications!</div>;
      const UpgradeBanner = () => <div>Upgrade to premium for more features!</div>;
      const MainContent = () => <div>Main content goes here.</div>;
    `,
  },

  // Lists and Keys
  {
    slug: "dynamic-list-management",
    title: "Dynamic List Management",
    difficulty: "intermediate",
    category: "react",
    topic: "Lists and Keys",
    description: `
      Create a TaskManager component that handles dynamic lists:

      Features:
      1. Display list of tasks with status
      2. Allow reordering tasks (drag & drop)
      3. Group tasks by category
      4. Allow bulk selection
      5. Implement virtual scrolling for large lists
      6. Handle task updates efficiently

      Each task should have:
      - Unique ID
      - Title
      - Status
      - Category
      - Priority
      - Due date
    `,
    hint: `
      List rendering tips:
      - Use stable, unique keys (not index)
      - Implement efficient update patterns
      - Consider using key for reset
      - Handle empty states
      - Use proper list semantics
      - Consider performance optimization
      - Remember accessibility
    `,
    solution: `
      import React, { useState } from 'react';
      import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

      const TaskManager = () => {
        const [tasks, setTasks] = useState([
          { id: '1', title: 'Task 1', status: 'To Do', category: 'Work' },
          { id: '2', title: 'Task 2', status: 'In Progress', category: 'Home' },
          { id: '3', title: 'Task 3', status: 'Done', category: 'Work' }
        ]);

        const onDragEnd = (result) => {
          if (!result.destination) return;
          const reorderedTasks = Array.from(tasks);
          const [movedTask] = reorderedTasks.splice(result.source.index, 1);
          reorderedTasks.splice(result.destination.index, 0, movedTask);
          setTasks(reorderedTasks);
        };

        return (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task"
                        >
                          <h3>{task.title}</h3>
                          <p>Status: {task.status}</p>
                          <p>Category: {task.category}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        );
      };
    `,
  },

  // useState
  {
    slug: "complex-state-management",
    title: "Complex State Management",
    difficulty: "intermediate",
    category: "react",
    topic: "useState",
    description: `
      Create a FormBuilder component using useState:

      Features:
      1. Add different field types (text, number, select)
      2. Remove fields
      3. Reorder fields
      4. Update field properties
      5. Form validation rules
      6. Preview mode

      State should handle:
      - Field configurations
      - Validation rules
      - Form metadata
      - Current values
      - Error states
    `,
    hint: `
      State management tips:
      - Split state logically
      - Use reducer for complex updates
      - Implement immutable updates
      - Consider state normalization
      - Handle derived state
      - Use state machines for complex flows
      - Remember undo/redo capability
    `,
  },

  // useEffect
  {
    slug: "effect-patterns",
    title: "Effect Patterns & Subscriptions",
    difficulty: "intermediate",
    category: "react",
    topic: "useEffect",
    description: `
      Create a DataSyncComponent that demonstrates different useEffect patterns:

      Implement:
      1. WebSocket connection management
      2. Window event listeners
      3. Data polling mechanism
      4. Debounced API calls
      5. Local storage sync
      6. Scroll position tracking

      Requirements:
      - Proper cleanup
      - Handle race conditions
      - Error recovery
      - Performance optimization
    `,
    hint: `
      useEffect tips:
      - Keep effects focused
      - Clean up subscriptions
      - Handle stale closures
      - Use appropriate dependencies
      - Consider extraction to custom hooks
      - Implement error boundaries
      - Use refs for mutable values
    `,
  },

  // useContext
  {
    slug: "theme-context",
    title: "Theme Context Implementation",
    difficulty: "intermediate",
    category: "react",
    topic: "useContext",
    description: `
      Create a complete theme system using Context API:

      Requirements:
      1. Create a ThemeContext and Provider
      2. Implement dark/light mode toggle
      3. Allow theme customization (primary/secondary colors)
      4. Create useTheme custom hook
      5. Add theme persistence in localStorage
      6. Handle system theme preference

      Components needed:
      - ThemeProvider
      - ThemeToggle
      - ThemeCustomizer
      - ThemedButton
      - ThemedCard
    `,
    hint: `
      Context implementation tips:
      - Separate theme logic from UI
      - Use context composition if needed
      - Handle missing Provider case
      - Consider performance implications
      - Use proper TypeScript types
      - Implement proper error boundaries
      - Consider using CSS variables
    `,
  },

  // useRef
  {
    slug: "ref-patterns",
    title: "useRef Patterns",
    difficulty: "intermediate",
    category: "react",
    topic: "useRef",
    description: `
      Create a VideoPlayer component demonstrating useRef patterns:

      Features:
      1. Video playback controls
      2. Track play time
      3. Implement picture-in-picture
      4. Add keyboard shortcuts
      5. Save playback position
      6. Custom video speed
      7. Handle fullscreen

      Focus on proper ref usage for:
      - DOM manipulation
      - Value persistence
      - Event listeners
      - Animations
    `,
    hint: `
      useRef tips:
      - Use for mutable values
      - Don't trigger re-renders
      - Clean up event listeners
      - Handle null refs safely
      - Consider TypeScript for better typing
      - Remember cleanup in useEffect
      - Use callback refs when needed
    `,
  },

  // useMemo
  {
    slug: "memoization-patterns",
    title: "Advanced Memoization",
    difficulty: "advanced",
    category: "react",
    topic: "useMemo",
    description: `
      Create a DataGrid component with advanced memoization:

      Features:
      1. Sortable columns
      2. Filterable data
      3. Pagination
      4. Row selection
      5. Column resizing
      6. Custom cell rendering
      7. Performance monitoring

      Implement proper memoization for:
      - Sorted data
      - Filtered results
      - Pagination calculations
      - Selected rows state
      - Column widths
    `,
    hint: `
      Memoization tips:
      - Profile before optimizing
      - Use proper dependency arrays
      - Consider computation cost
      - Break down complex calculations
      - Use Web Workers for heavy tasks
      - Implement virtual scrolling
      - Cache intermediate results
    `,
  },

  // useCallback
  {
    slug: "callback-optimization",
    title: "Callback Optimization Patterns",
    difficulty: "advanced",
    category: "react",
    topic: "useCallback",
    description: `
      Create a TreeView component with optimized callbacks:

      Features:
      1. Expandable nodes
      2. Node selection
      3. Drag and drop
      4. Context menu
      5. Search functionality
      6. Lazy loading
      7. Performance monitoring

      Implement optimized callbacks for:
      - Node expansion
      - Selection handling
      - Drag events
      - Search filtering
      - Data loading
    `,
    hint: `
      Callback optimization tips:
      - Use with React.memo
      - Proper dependency arrays
      - Avoid inline functions
      - Consider callback scope
      - Profile render counts
      - Handle event cleanup
      - Use stable references
    `,
  },

  // Custom Hooks
  {
    slug: "custom-hooks-collection",
    title: "Custom Hooks Collection",
    difficulty: "advanced",
    category: "react",
    topic: "Custom Hooks",
    description: `
      Create a collection of custom hooks:

      Required Hooks:
      1. useLocalStorage - Persistent state
      2. useDebounce - Debounced value
      3. usePrevious - Previous value
      4. useMediaQuery - Media queries
      5. useOnClickOutside - Click outside
      6. useFetch - Data fetching
      7. useKeyPress - Keyboard events

      Each hook should:
      - Handle edge cases
      - Include TypeScript types
      - Have proper cleanup
      - Include usage examples
    `,
    hint: `
      Custom hooks tips:
      - Follow hooks naming convention
      - Keep hooks focused
      - Handle cleanup properly
      - Consider reusability
      - Add proper documentation
      - Include error handling
      - Test edge cases
    `,
  },

  // Rules of Hooks
  {
    slug: "hooks-rules-demo",
    title: "Rules of Hooks Demonstration",
    difficulty: "intermediate",
    category: "react",
    topic: "Rules of Hooks",
    description: `
      Create a component that demonstrates proper hook usage:

      Implement features that show:
      1. Proper hook ordering
      2. Conditional hook usage
      3. Custom hook composition
      4. Hook dependency management
      5. Effect cleanup
      6. Context consumption
      7. State updates

      Include examples of:
      - Common mistakes
      - Best practices
      - Performance implications
      - Testing approaches
    `,
    hint: `
      Rules of Hooks tips:
      - Only call hooks at top level
      - Only call hooks in React functions
      - Use ESLint hooks plugin
      - Consistent dependencies
      - Proper cleanup implementation
      - Handle component lifecycle
      - Follow naming conventions
    `,
  },
];
