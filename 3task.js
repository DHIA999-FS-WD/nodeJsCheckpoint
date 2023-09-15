const fs = require("node:fs");
//i use "writeFile" to create a file named "welcome.txt" containing one line "Hello Node".
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("add Welcome.txt");
    console.log("the next message from Welcome.txt");
  }
});
//i use "writeFile" to read  "welcome.txt" content

fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
//i use "writeFileSync" to read  "hello.txt" content

const helloFile = fs.readFileSync("./hello.txt");
console.log(helloFile.toString());
