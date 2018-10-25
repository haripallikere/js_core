const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;

var bank_balance = 303.91;
var amount = 0;

var phoneCount = 0;
var accessoriesCount = 0;
var parchaseAmout = 0;

// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
for(amount = 0; amount <= bank_balance;) {
    amount += PHONE_PRICE;
    phoneCount++;
    if(amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
        accessoriesCount++;
    }   
}

//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

var purchaseAmout = amount + calculateTax(amount, TAX_RATE);

console.log(purchaseAmout);

//Finally, check the amount against your bank account balance to see if you can afford it or not.
if(purchaseAmout > bank_balance) {
    console.log(`Your bank balance is lesser.\nThe amount is $${formatAmount(purchaseAmout)}.`);
}

// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.
function calculateTax(amount, tax) {
    return amount * tax;
}

// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.
function formatAmount(amount) {
    return amount.toFixed(2);
}

console.log('');

// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
for(var i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log('FizzBuzz');
        }
    } else if(i % 3 === 0) {
        console.log('Fizz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}