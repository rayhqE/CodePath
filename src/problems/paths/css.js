export const cssProblems = [
  {
    slug: "style-paragraphs-selectors",
    title: "Style Paragraphs with Selectors",
    difficulty: "beginner",
    category: "css",
    topic: "Selectors",
    description:
      "Write CSS rules to style all paragraphs with a specific font size, font family, and text color.",
    starterCode:
      "<style>\n  /* Add CSS rules here */\n</style>\n<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>",
    hint: "Use the `p` selector to target all paragraphs. Use `font-size`, `font-family`, and `color` properties.",
    solution: `
<style>
  p {
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: blue;
  }
</style>
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>`,
  },
  {
    slug: "box-model-practice",
    title: "Box Model Practice",
    difficulty: "intermediate",
    category: "css",
    topic: "Box Model",
    description:
      "Write CSS rules to style a div with padding, border, and margin. Make sure the content inside the div stays centered.",
    starterCode:
      '<style>\n  /* Add CSS rules here */\n</style>\n<div class="box">Centered Content</div>',
    hint: "Use `padding` to add space inside the box, `border` for an outline, and `margin` to create space outside. Combine with `text-align` for centering.",
    solution: `
<style>
  .box {
    padding: 20px;
    border: 2px solid black;
    margin: 10px auto;
    text-align: center;
  }
</style>
<div class="box">Centered Content</div>`,
  },
  {
    slug: "apply-typography-styles",
    title: "Apply Typography Styles",
    difficulty: "beginner",
    category: "css",
    topic: "Typography",
    description:
      "Write CSS rules to style headings with a specific font size, weight, and line height.",
    starterCode:
      "<style>\n  /* Add CSS rules here */\n</style>\n<h1>Main Heading</h1>\n<h2>Subheading</h2>",
    hint: "Use the `h1` and `h2` selectors. Set `font-size` for size, `font-weight` for boldness, and `line-height` for spacing.",
    solution: `
<style>
  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
  }
  h2 {
    font-size: 24px;
    font-weight: normal;
    line-height: 1.4;
  }
</style>
<h1>Main Heading</h1>
<h2>Subheading</h2>`,
  },
  {
    slug: "set-background-color",
    title: "Set Background Color",
    difficulty: "beginner",
    category: "css",
    topic: "Colors & Backgrounds",
    description:
      "Write CSS rules to set a background color for the body and a gradient background for a div.",
    starterCode:
      '<style>\n  /* Add CSS rules here */\n</style>\n<body>\n  <div class="gradient-box">Gradient Box</div>\n</body>',
    hint: "Use `background-color` for the body and `background` with `linear-gradient` for the div.",
    solution: `
<style>
  body {
    background-color: lightgray;
  }
  .gradient-box {
    background: linear-gradient(to right, red, yellow);
  }
</style>
<body>
  <div class="gradient-box">Gradient Box</div>
</body>`,
  },
  {
    slug: "hover-effect",
    title: "Hover Effect",
    difficulty: "intermediate",
    category: "css",
    topic: "Selectors",
    description:
      "Write CSS rules to add a hover effect to buttons that changes the background color and text color.",
    starterCode:
      '<style>\n  /* Add CSS rules here */\n</style>\n<button class="btn">Hover Me</button>',
    hint: "Use the `:hover` pseudo-class to define styles for the hover state.",
    solution: `
<style>
  .btn:hover {
    background-color: blue;
    color: white;
  }
</style>
<button class="btn">Hover Me</button>`,
  },
  {
    slug: "css-grid-layout",
    title: "CSS Grid Layout",
    difficulty: "intermediate",
    category: "css",
    topic: "Grid",
    description: `
      Create a responsive grid layout with the following requirements:
      1. Create a 3x3 grid for desktop
      2. Each grid item should have different background colors
      3. First item should span 2 columns
      4. Last item should span 2 rows
      5. Grid should become 2 columns on tablet (< 768px)
      6. Grid should become 1 column on mobile (< 480px)
    `,
    starterCode: `
<style>
  .grid-container {
    /* Add your grid styles here */
  }

  .grid-item {
    /* Add item styles here */
  }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
</div>`,
    solution: `
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .grid-item {
    padding: 20px;
    text-align: center;
    background-color: #e0e0e0;
  }

  .grid-item:nth-child(1) {
    grid-column: span 2;
    background-color: #ffcdd2;
  }

  .grid-item:last-child {
    grid-row: span 2;
    background-color: #c8e6c9;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
</style>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
</div>`,
  },
  {
    slug: "css-positioning-challenge",
    title: "CSS Positioning Challenge",
    difficulty: "intermediate",
    category: "css",
    topic: "Positioning",
    description: `
      Create a layout with the following positioning requirements:
      1. A header fixed to the top of the viewport
      2. A sidebar that stays fixed while scrolling
      3. A floating action button in the bottom-right corner
      4. A modal centered in the viewport
      5. Content that scrolls underneath the fixed elements
    `,
    starterCode: `
<style>
  .header {
    /* Add header styles */
  }

  .sidebar {
    /* Add sidebar styles */
  }

  .floating-button {
    /* Add button styles */
  }

  .modal {
    /* Add modal styles */
  }

  .content {
    /* Add content styles */
  }
</style>

<div class="header">Header</div>
<div class="sidebar">Sidebar</div>
<div class="content">Content</div>
<button class="floating-button">+</button>
<div class="modal">Modal Content</div>`,
    solution: `
<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
  }

  .sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 250px;
    background: #f5f5f5;
    overflow-y: auto;
  }

  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: #2196f3;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .content {
    margin-left: 250px;
    margin-top: 60px;
    padding: 20px;
  }
</style>
<div class="header">Header</div>
<div class="sidebar">Sidebar</div>
<div class="content">Content</div>
<button class="floating-button">+</button>
<div class="modal">Modal Content</div>`,
  },
  {
    slug: "responsive-design-patterns",
    title: "Responsive Design Patterns",
    difficulty: "advanced",
    category: "css",
    topic: "Responsive Design",
    description: `
      Create a responsive layout that implements these common patterns:
      1. A navigation menu that becomes a hamburger menu on mobile
      2. A card grid that adjusts columns based on viewport width
      3. Images that scale proportionally
      4. Font sizes that adjust using relative units
      5. A sidebar that collapses on mobile
    `,
    starterCode: `
<style>
  /* Add your responsive styles here */
  .nav {
    /* Navigation styles */
  }

  .cards {
    /* Card grid styles */
  }

  .card img {
    /* Image styles */
  }

  .sidebar {
    /* Sidebar styles */
  }

  /* Add your media queries */
  @media (max-width: 768px) {
    /* Tablet styles */
  }

  @media (max-width: 480px) {
    /* Mobile styles */
  }
</style>

<nav class="nav">
  <div class="nav-brand">Logo</div>
  <button class="nav-toggle">☰</button>
  <ul class="nav-menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>

<div class="content">
  <div class="cards">
    <!-- Add cards here -->
  </div>
  <aside class="sidebar">
    <!-- Sidebar content -->
  </aside>
</div>`,
    solution: `
<style>
  :root {
    --base-font: 16px;
    --spacing: 1rem;
  }

  html {
    font-size: var(--base-font);
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing);
  }

  .nav-toggle {
    display: none;
  }

  .nav-menu {
    display: flex;
    gap: var(--spacing);
    list-style: none;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing);
    padding: var(--spacing);
  }

  .card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .sidebar {
    width: 300px;
    padding: var(--spacing);
  }

  @media (max-width: 768px) {
    :root {
      --base-font: 14px;
    }

    .sidebar {
      width: 200px;
    }
  }

  @media (max-width: 480px) {
    .nav-toggle {
      display: block;
    }

    .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: white;
    }

    .nav-menu.active {
      display: flex;
    }

    .sidebar {
      width: 100%;
    }
  }
</style>
<nav class="nav">
  <div class="nav-brand">Logo</div>
  <button class="nav-toggle">☰</button>
  <ul class="nav-menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>

<div class="content">
  <div class="cards">
    <!-- Add cards here -->
  </div>
  <aside class="sidebar">
    <!-- Sidebar content -->
  </aside>
</div>`,
  }
];
