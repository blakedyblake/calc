const { ENGINE_METHOD_ALL } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Comment instructions for the user
console.log("+ to add, - to subtract, x to multiply, / to divide, sqrt to take a square root.");
console.log("Each takes 2 arguments, except for sqrt only the first one counts ;)");

console.log("rem for remainder in a division and pwr for exponential equations");
console.log("pwr 3 2 would be three squared");


reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	

	// This line closes the connection to the command line interface.
	if(mathSymbol === '+'){
		console.log(`${num1} + ${num2} = ${num1 + num2}`);
	}
	else if(mathSymbol === '-'){
		console.log(`${num1} - ${num2} = ${num1 - num2}`);
	}
	else if((mathSymbol === 'x') || (mathSymbol === 'X') ||(mathSymbol === '*')){
		console.log(`${num1} x ${num2} = ${num1 * num2}`);
	}
	else if((mathSymbol === "/")) {
		console.log(`${num1} / ${num2} = ${num1 / num2}`);
	}
	else if(mathSymbol === "sqrt"){
		console.log(`The square root of ${num1} is ${Math.sqrt(num1)}`);
	}
	else if(mathSymbol === "pwr"){
		console.log(`${num1} to the ${num2} power is ${Math.pow(num1, num2)}`)

	}
	else if(mathSymbol === "rem"){
		console.log(`The remainer of ${num1} divided by ${num2} is ${num1 % num2}`);
	}
	else{
		console.log("Invalid response");
	}
	reader.close()

});
