// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
function Persone(name,dob,job) {
    this.name = name;
    this.dob=dob;
    this.job=job;
}



// Define a function name calculateAge which returns the age of the person
Persone.prototype.calculateAge = function(){
    let today = new Date().getFullYear();
    let age = today - this.dob;
    return age;
  }


// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')
var client1 = new Persone('hari','1999','artist');
var client2 = new Persone('lop','2015','lover');
var client3 = new Persone('danny','2014','dog');

// call the calculateAge function on each object

client1.calculateAge();
client2.calculateAge();
client3.calculateAge();

