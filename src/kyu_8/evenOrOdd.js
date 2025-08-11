// Create a function that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
const remainder  = number % 2;
return remainder === 0 ? console.log('even') : console.log('odd');
}
