// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
function validatePassword() {
    var password = prompt('Enter Your Password');
    var confirmPassword = prompt('Confirm Password');
    if(password === confirmPassword) {
        alert('Password Validated');
    } else {
        alert('Password do not match');
    }
}

// Find the output of the following
// Logical AND operation only if both r t,t
// true  && true; = true;
// true  && false; = false;
// false && true; = false;
// false && false; = false;

// Logical OR operation
// true  || true; = true;
// true  || false; = true;
// false || true; = true;
// false || false; = false;

// "foo" && "bar"; = bar
// "bar" && "foo"; = foo
// "foo" && ""; = " "
// ""    && "foo"; = " "

// "foo" || "bar"; = foo
// "bar" || "foo"; = bar 
// "foo" || ""; = foo
// ""    || "foo"; = foo



// Output of this alert( alert(1) || 2 || alert(3) ); = 1 ,2


// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
 function calculate(a,b) {
     console.log('Sum:',a+b)
     console.log('Difference:',a-b)
     console.log('Product:',a*b)
     console.log('Division:',a/b)
 }


// Function to display a number if user enters negative number
 function negativeAlert() {
    var number = prompt("Enter a number");
        if(number < 0) {
         alert('Your number is negative.');
    } else {
         alert('Your number is postive');
    }
}




// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

 var sum = 0;
    for(let i = 1; i < 1000; i++) {
     if(i % 3 === 0 || i % 5 === 0) {
         sum = sum + i;
     }
}


// If user enters positive number, that number won't be displayed
    function positive() {
     var number = prompt('Enter num');
        if(number > 0) {
         alert(`Your number is ${number}.`);
     }
 }


// Funnction to check whether an integer entered by the user is odd or even
 function evenOdd() {
     var number = prompt('Enter num');
     if(number % 2 === 0) {
         alert(`${number} number is even.`);
     } else {
         alert(`${number} number is odd.`);
     }
 }


// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
function relation(a,b) {
    console.log(`${a} == ${b} : ${a == b}`);
     console.log(`${a} > ${b} : ${a > b}`);
    console.log(`${a} < ${b} : ${a < b}`);
 }


// Funnction to Check Whether a Character is Vowel or Consonant
 function check() {
    var character = prompt('Enter word');
     if((character = 'a') || (character = 'e') || (character ='i') || (character = 'o') || (character = 'u')) {
         alert('vowel');
     } else {
         alert('consonant');
    }
 }

// Funnction to Find the Largest Number Among Three Numbers
 function largest(num1,num2,num3) {
     var max = 0;
     if (num1 > num2 && num1>num3) {
        max = num1;
     }
     else if (num2 > num1 && num2 >num3) {
       max = num2;
    }   
    else  (num3 > num1 && num2 > num2) {
        max = num3;
    }
    return max;
}

Switch
You are given a variable, . Your task is to print:
- ONE, if num is equal to .
- TWO, if num is equal to .
- THREE, if num is equal to .
- FOUR, if num is equal to .
- FIVE, if num is equal to .
- SIX, if num is equal to .
- SEVEN, if num is equal to .
- EIGHT, if num is equal to .
- NINE, if num is equal to .
- PLEASE TRY AGAIN, if  is none of the above.



You are given a variable marks. Your task is to print:
- AA if marks is greater than 90.
- AB if marks is greater than 80 and less than or equal to 90
- BB if marks is greater than 70 and less than or equal to 80
- BC if marks is greater than 60 and less than or equal to 70
- CC if marks is greater than 50 and less than or equal to 60
- CD if marks is greater than 40 and less than or equal to 50
- DD if marks is greater than 30 and less than or equal to 40
- FF if marks is less than or equal to 30




// Funnction to generate Multiplication Table of a given number (use alert for number input)


// Funnctionn to calculate the Factorial of a Number
 function factorial(n) {
    if(n==0) {
        return 1;
     }
     return n * calcFactorial(n-1);
 }

// Output: var x = 10 + "1"; console.log(x); typeof x;
string

//  Solve: 225 % 6 = ?
3

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation


// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
