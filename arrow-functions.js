/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

// Below is same as above but with const instead of function plus an = inbetween params and a fat arrow after params

const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

// Remove curly braces and put body content what you want to return after fat arrow, unless it has more complex logic then curlies are needed

const addTwoNumbers2 = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) => (a + b);  Also valid with return value in parentheses

let sum2 = addTwoNumbers2(6, 5);
console.log(sum2);

// Implicit Returns

// message parameter below is a single param so doesnt need parentheses, use parentheses with mutiple params
const saySomething = message => console.log(message);
saySomething('Hello There!');

// Using no params like below must include empty paretheses
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiple line string that must be wrapped in parentheses. 
    </p>`
)

console.log(returnMultipleLines());
