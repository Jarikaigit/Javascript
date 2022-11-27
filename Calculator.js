var readline = require('readline-sync');

var Calculation = function(num1, num2) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = "+";

    
      var result = x + y;
    }

    console.log("Result: " + result);
  };
}

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");

var calc = new Calculation(num1, num2);

calc.result();