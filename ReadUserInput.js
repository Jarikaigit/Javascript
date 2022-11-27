const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`Please enter the first number: `, number1 => {
  readline.question(`Please enter the second number: `, number2 => {
      let sum = parseInt(number1) + parseInt(number2);
      console.log(sum);
      readline.close();
  });
});