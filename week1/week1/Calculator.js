var ask = require('readline-sync');
var input = ask.question("Let's calculate! Put in your calculations here! Feel free to use spaces between your numbers and operators. For example, 1 + 1 will work just fine :)");
var inputarray = input.split(" ");
var firstnumber = parseInt(inputarray[0]);
var mathoperator = inputarray[1];
var secondnumber = parseInt(inputarray[2]);

if(mathoperator === "*"){
  console.log(firstnumber * secondnumber);
  
}

if(mathoperator === "/"){
  console.log(firstnumber / secondnumber);
  
}

if(mathoperator === "+"){
  console.log(firstnumber + secondnumber);
 
}

if(mathoperator === "-"){
  console.log(firstnumber - secondnumber);

}