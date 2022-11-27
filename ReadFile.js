const { EOF } = require('dns');
const fs = require('fs');
Summa = 0;
console.log("Start");
do
    fs.readFile('/CloudDeveloper/javascript/numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return Summa;
    }
    Summa = Summa + data;
    
    });
    
while (!EOF);
fs.onclose
    console.log(Summa);
console.log("End");
