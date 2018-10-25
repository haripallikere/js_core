// Log message in console saying "I'm Learning Javascript"

// console.log("I'm Learning JavaScript");



// var name = "Mark";  "Mark" is a string.  What is name?

// console.log('name is a variable');


// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// var admin, name;
// name = 'John';
// admin = name;
// alert(admin);




// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm

// alert("Hello World");



// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"

// function greet() {
//     let greetName = prompt("Enter your name");
//     alert(`Welcome ${greetName}`);
// }

// greet();


// Modify the previous program such that only the users Alice and Bob are greeted with their names.

// function greetTwo() {
//     let greetName = prompt("Enter your name");
//     if(greetName === 'Alice' || greetName === 'Bob'){
//         alert(`Welcome ${greetName}`);
//     }
// }

// greetTwo();


// Find the error if any (var product cost = 3.45;)

//Ya, these are two variables, So we have to put comma between product and cost like
var product, cost = 3.45;




// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"

// function greetAgain(user) {
//     console.log(`Hello ${user}, How are you doing?`);
// } 

// greetAgain('Sam');

// Right or Wrong
//   "Hello World" -> Right
//   'Hello World" -> Wrong
//   "Hello World' -> Wrong
//   'Hello World' -> Right




// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

function calcLength(string) {
    user = prompt("Enter your sentence");
    alert(`Your word length is ${user.length}.`);
}

calcLength("I am a string");

