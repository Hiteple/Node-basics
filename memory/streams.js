const fs = require("fs");

let partialData = "";

// Read and encode!
const readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF-8");

// When fs reads the file we have an event and can save to partialData in streams
readableStream.on("data", (chunk) => {
  partialData += chunk;
});

// This is USEFUL when having BIG files, performance gets improved a lot!
const data = () =>
  readableStream.on("end", () => {
    console.log(partialData);
  });

module.exports = { data };
