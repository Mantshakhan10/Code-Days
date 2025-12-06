const fs = require("fs");

// Write to a file
fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
  if (err) {
    console.error("Error while writing file:", err);
    return;
  }
  console.log("File written successfully!");

  // Now read the same file
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error while reading file:", err);
      return;
    }
    console.log("File content:", data);
  });
});
