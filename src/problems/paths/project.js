export const projectProblems = [
  {
    slug: "todo-list-app",
    title: "To-Do List App",
    difficulty: "beginner",
    category: "project",
    topic: "Task Management",
    description: `
          The To-Do List App project is designed to help users manage their daily tasks efficiently. This simple application allows users to add, edit, and delete tasks, providing a straightforward interface for task management.
    
          Key Features:
          1. Task Creation: Allow users to add new tasks with a title and optional description.
          2. Task Editing: Enable users to edit existing tasks to update their details.
          3. Task Deletion: Provide functionality to delete tasks that are no longer needed.
          4. Task Completion: Allow users to mark tasks as completed and filter tasks based on their status (e.g., all, active, completed).
          5. Responsive Design: Ensure the app is usable on both mobile and desktop devices.
    
          UI Layout Example:
          - Task List: A simple list view displaying all tasks with options to edit or delete.
          - Task Input: An input field for adding new tasks, with a button to submit.
          - Filter Options: Buttons or tabs to filter tasks by status (e.g., all, active, completed).
    
          UI Details:
          - Use a clean and minimalistic design to keep the focus on task management.
          - Implement responsive design to ensure usability on various devices.
          - Use icons or checkboxes to indicate task completion status.
        `,
    hint: `
          - Use useState for managing task state.
          - Implement basic form handling for task input.
          - Use CSS for styling and responsive design.
          - Consider using local storage to persist tasks between sessions.
        `,
  },
  {
    slug: "weather-app",
    title: "Weather App",
    difficulty: "beginner",
    category: "project",
    topic: "Weather Information",
    description: `
          The Weather App project is designed to provide users with current weather information for their location or any city they search for. This app will fetch data from a weather API and display it in a user-friendly format.
    
          Key Features:
          1. Current Weather Display: Show current temperature, weather conditions, and location.
          2. Search Functionality: Allow users to search for weather information by city name.
          3. Weather Icons: Display appropriate icons based on weather conditions (e.g., sunny, rainy).
          4. Responsive Design: Ensure the app is usable on both mobile and desktop devices.
    
          UI Layout Example:
          - Weather Display: A main section showing the current weather with temperature and conditions.
          - Search Bar: An input field for entering city names to fetch weather data.
          - Weather Icon: An icon representing the current weather condition.
    
          UI Details:
          - Use a clean and simple design to focus on weather information.
          - Implement responsive design to ensure usability on various devices.
          - Use color schemes that reflect different weather conditions.
        `,
    hint: `
          - Use useState and useEffect for managing state and fetching data.
          - Use a weather API like OpenWeatherMap for fetching weather data.
          - Implement error handling for API requests.
          - Use CSS for styling and responsive design.
        `,
  },
  {
    slug: "chat-app",
    title: "Chat App with Firebase",
    difficulty: "beginner",
    category: "project",
    topic: "Real-time Communication",
    description: `
          The Chat App project is designed to facilitate real-time communication between users using Firebase. This app will allow users to send and receive messages in a chat room environment.
    
          Key Features:
          1. User Authentication: Use Firebase Authentication to allow users to sign up and log in.
          2. Real-time Messaging: Enable users to send and receive messages instantly using Firebase Firestore.
          3. Chat Rooms: Allow users to join different chat rooms or create new ones.
          4. Responsive Design: Ensure the app is usable on both mobile and desktop devices.
    
          UI Layout Example:
          - Chat Room: A main area displaying messages with a text input for sending new messages.
          - User List: A sidebar showing online users and available chat rooms.
          - Message Input: An input field for typing and sending messages.
    
          UI Details:
          - Use a simple and intuitive design to focus on messaging.
          - Implement responsive design to ensure usability on various devices.
          - Use distinct colors for different users' messages to enhance readability.
        `,
    hint: `
          - Use Firebase Authentication for user sign-up and login.
          - Use Firebase Firestore for storing and retrieving messages in real-time.
          - Use useState for managing message state.
          - Use CSS for styling and responsive design.
        `,
  },
  {
    slug: "booking-app",
    title: "Booking.com Like App",
    difficulty: "advanced",
    category: "project",
    topic: "Travel and Accommodation Booking",
    description: `
      The Booking.com-like App project aims to create a comprehensive platform for booking travel accommodations, such as hotels, apartments, and vacation rentals. This app will mimic the popular features of Booking.com, focusing on user convenience and a seamless booking experience.

      Key Features:
      1. User Authentication and Profile Management: Implement a secure authentication system using JWT to allow users to create accounts, log in, and manage their profiles. This feature ensures that user data is protected and only accessible to authorized users.
      2. Search and Filter Functionality: Develop a robust search system that allows users to find accommodations based on location, price, amenities, and availability. Implement filters for refining search results.
      3. Booking and Reservation System: Enable users to book accommodations directly through the app. Implement a reservation system that handles availability, pricing, and confirmation.
      4. Reviews and Ratings: Allow users to leave reviews and ratings for accommodations they have stayed at. Display average ratings and reviews on accommodation listings.
      5. Payment Integration: Integrate a secure payment gateway to handle transactions. Ensure that users can pay for bookings using various payment methods.

      UI Layout Example:
      - Home Page: A landing page with a search bar and featured destinations.
      - Search Results: A list or grid view of available accommodations with filters and sorting options.
      - Accommodation Detail Page: Detailed information about the accommodation, including photos, amenities, reviews, and booking options.
      - User Profile: A section for managing user information, bookings, and reviews.

      UI Details:
      - Use a clean and intuitive design with a focus on user experience and accessibility.
      - Implement responsive design to ensure usability on both mobile and desktop devices.
      - Use high-quality images and clear typography to enhance the visual appeal.
    `,
    hint: `
      - Use Redux for state management to handle complex state interactions.
      - Implement React Router for seamless navigation between different sections of the app.
      - Use JWT for secure authentication and session management.
      - Integrate third-party APIs for location and accommodation data.
      - Use a payment gateway like Stripe or PayPal for secure transactions.
    `,
  },
  {
    slug: "collaborative-task-board",
    title: "Collaborative Task Board",
    difficulty: "intermediate",
    category: "project",
    topic: "Collaboration Tool",
    description: `
      The Collaborative Task Board project addresses the need for teams to manage tasks in real-time, enhancing productivity and collaboration. With remote work becoming more common, there is a growing demand for tools that facilitate effective team collaboration.

      Key Features:
      1. User Authentication and Team Management: Implement a system for user authentication and team creation, allowing users to join and manage teams. This feature ensures that only authorized users can access team data and collaborate on tasks.
      2. Real-time Task Updates and Notifications: Use WebSockets to provide real-time updates on task changes and send notifications to team members. This feature ensures that all team members are always informed about the latest task updates.
      3. Drag-and-Drop Task Organization: Implement drag-and-drop functionality using libraries like React DnD, allowing users to organize tasks easily. This feature provides a user-friendly interface for managing tasks and improving workflow efficiency.
      4. Task Comments and Activity Logs: Enable users to comment on tasks and maintain an activity log for tracking changes and updates. This feature facilitates communication and collaboration among team members.
      5. Integration with Third-party Services: Integrate with services like Slack and Trello to enhance collaboration and streamline workflows. This feature allows users to leverage existing tools and improve their productivity.

      UI Layout Example:
      - Task Board: A kanban-style board with columns for different task statuses (e.g., To Do, In Progress, Done).
      - Team Dashboard: A central hub for team management and task overview.
      - Task Detail View: A modal or sidebar for viewing and editing task details, comments, and activity logs.
      - Notification Center: A panel for real-time notifications and updates.

      UI Details:
      - Use a clean and organized layout to facilitate task management and team collaboration.
      - Implement responsive design to ensure usability on desktops and mobile devices.
      - Use color coding and icons to differentiate task statuses and priorities.
    `,
    hint: `
      - Use useState and useEffect hooks for managing component state and side effects.
      - Implement WebSockets for real-time communication and updates.
      - Use server-side validation to ensure data integrity and security.
      - Integrate third-party APIs to extend functionality and improve user experience.
    `,
  },
];
