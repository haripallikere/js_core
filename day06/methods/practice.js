// Write a JavaScript function to check whether an `input` is a string or not.
function check(value) {
   console.log(typeof(value));
}

// Write a JavaScript function to check whether a string is blank or not.



// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']
function split(value) {
    console.log(value.split(" "));
}



// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"
 function substr(value) {
     console.log(value.substr(0,4))
 }



// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
function replace(y) {
    var str = 'Rahul Dravid';
    var re = /Dravid/g;
    var b = y;
    var newstr = str.replace(re,b);
        console.log(newstr);
    }

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
function hideEmail(email){
    var domain = email.split('@');
    return domain[0].slice(0,3) + "....." + '@' + domain[1].toString(); 
  }

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
  function parameterize(input) {
    return(input.toLowerCase().split(" ").join("-"));
  }



// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
   function firstCap(input) {
       var strf = input.split(' ');
       for ( i = 0; i < strf.lenght; i++) {
           strf[i] = strf[i].charAt(0).toUpperCase();
       }
       return strf.join('');
    }

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'



// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'



// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
  func

// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd
Functions