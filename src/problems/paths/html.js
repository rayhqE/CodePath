export const htmlProblems = [
  {
    id: 7,
    slug: "basic-html-structure",
    title: "Basic HTML Structure",
    difficulty: "beginner",
    category: "html",
    topic: "Document Structure",
    description:
      "Create a basic HTML document with a title, a header, and a paragraph.",
    starterCode:
      "<!DOCTYPE html>\n<html>\n<head>\n  <!-- Add title here -->\n</head>\n<body>\n  <!-- Add header and paragraph here -->\n</body>\n</html>",
    solution: `
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a paragraph explaining the content of the page.</p>
</body>
</html>`,
  },
  {
    id: 8,
    slug: "using-semantic-elements",
    title: "Using Semantic Elements",
    difficulty: "beginner",
    category: "html",
    topic: "Semantic Elements",
    description:
      "Create a webpage using semantic elements like <header>, <main>, and <footer>.",
    starterCode:
      "<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add semantic elements here -->\n</body>\n</html>",
    solution: `
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>Page Title</h1>
  </header>
  <main>
    <p>Main content goes here.</p>
  </main>
  <footer>
    <p>Footer content goes here.</p>
  </footer>
</body>
</html>`,
  },
  {
    id: 9,
    slug: "create-simple-form",
    title: "Create a Simple Form",
    difficulty: "beginner",
    category: "html",
    topic: "Forms",
    description:
      "Create a form with inputs for name, email, and a submit button.",
    starterCode:
      "<!DOCTYPE html>\n<html>\n<body>\n  <!-- Add form here -->\n</body>\n</html>",
    solution: `
<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Submit</button>
  </form>
</body>
</html>`,
  },
  {
    id: 10,
    slug: "css-selectors-practice",
    title: "CSS Selectors Practice",
    difficulty: "beginner",
    category: "css",
    topic: "Selectors",
    description:
      "Write CSS rules to style a paragraph with a class of 'highlight' and a div with an id of 'main'.",
    starterCode:
      '<style>\n  /* Add CSS here */\n</style>\n<div id="main"></div>\n<p class="highlight"></p>',
    solution: `
<style>
  #main {
    background-color: lightblue;
  }
  .highlight {
    font-weight: bold;
    color: red;
  }
</style>
<div id="main">Main Content</div>
<p class="highlight">Highlighted Text</p>`,
  },
  {
    id: 11,
    slug: "responsive-design-with-flexbox",
    title: "Responsive Design with Flexbox",
    difficulty: "intermediate",
    category: "css",
    topic: "Flexbox",
    description:
      "Use Flexbox to create a responsive layout with three boxes aligned horizontally and evenly spaced.",
    starterCode:
      '<style>\n  /* Add CSS here */\n</style>\n<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>',
    solution: `
<style>
  .container {
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: lightgrey;
    text-align: center;
    line-height: 100px;
  }
</style>
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>`,
  },
  {
    id: 8,
    slug: "html-table-structure",
    title: "Complex Table Structure",
    difficulty: "intermediate",
    category: "html",
    topic: "Tables",
    description: `
      Create an HTML table for a school schedule with the following requirements:
      1. Use proper table structure (thead, tbody, tfoot)
      2. Include merged cells for lunch break (rowspan)
      3. Include column headers for each day (Monday-Friday)
      4. Include time slots in the first column
      5. Add a caption for the table
      6. Include summary row in the footer showing total hours per day

      The table should represent a weekly class schedule.
    `,
    starterCode: `
<!-- Create your table structure here -->
<table>
  <!-- Add caption -->
  
  <!-- Add header -->
  
  <!-- Add body -->
  
  <!-- Add footer -->
</table>
    `,
    solution: `
<table border="1">
  <caption>Weekly Class Schedule - Fall 2024</caption>
  
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>9:00 - 10:30</td>
      <td>Mathematics</td>
      <td>Physics</td>
      <td>Mathematics</td>
      <td>Physics</td>
      <td>Mathematics</td>
    </tr>
    <tr>
      <td>10:45 - 12:15</td>
      <td>History</td>
      <td>English</td>
      <td>History</td>
      <td>English</td>
      <td>History</td>
    </tr>
    <tr>
      <td>12:15 - 13:15</td>
      <td colspan="5" align="center">Lunch Break</td>
    </tr>
    <tr>
      <td>13:15 - 14:45</td>
      <td>Biology</td>
      <td>Chemistry</td>
      <td>Biology</td>
      <td>Chemistry</td>
      <td>Biology</td>
    </tr>
    <tr>
      <td>15:00 - 16:30</td>
      <td>Art</td>
      <td>Music</td>
      <td>Art</td>
      <td>Music</td>
      <td>Art</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <th>Total Hours</th>
      <td>6.5</td>
      <td>6.5</td>
      <td>6.5</td>
      <td>6.5</td>
      <td>6.5</td>
    </tr>
  </tfoot>
</table>`,
    hint: `
      Remember to:
      1. Use <thead>, <tbody>, and <tfoot> for proper table structure
      2. Use colspan attribute for merged cells
      3. Use <caption> for table title
      4. Use <th> for header cells and <td> for data cells
      5. Include proper alignment attributes where needed
    `
  },
];
