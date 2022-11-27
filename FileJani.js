const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
    input: fs.createReadStream('Numbers.txt'),
    output: process.stdout,
    terminal: false
});
console.log("Starting file processing.");
let sum = 0;
file.on('line', (line) => {
    console.log(line);
    const number = parseInt(line);
    sum += number;
}).on("close", () => {
    console.log("All file lines have been processed.");
    console.log("File processing complete.");
    console.log(`Sum of the numbers is ${sum}.`);
});









