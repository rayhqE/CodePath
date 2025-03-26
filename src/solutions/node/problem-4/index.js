const fs = require("fs");

const readStream = fs.createReadStream("./sample.txt", "utf-8");

readStream.pipe(process.stdout);

readStream.on("error", () => {
  console.log("error reading d file", err);
});
