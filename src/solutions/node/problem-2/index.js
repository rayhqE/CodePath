const fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    console.log(result);
  }
});
