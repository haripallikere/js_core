// objectdotcreatemethod
function animal(name,age) {
    var newAnimal = Object.create(animalFeature);
    newAnimal.name = name;
    newAnimal.age = age;
    return newAnimal;
}
var animalFeature = {
    eat : function() {
        console.log('eat');
    },
    move : function() {
        console.log('moving')
    }
}
function veg(para1,para2) {
    var newVeg = animal(para1,para2);
    Object.setPrototypeOf(newVeg,vegFunc)
    return newVeg;
}
var vegFunc = {
    eatGrass : function() {
      console.log('eat grass')  
    }    
}
Object.setPrototypeOf(vegFunc,animalFeature)
function rabbit(para1,para2) {
    var newRabbit = veg(para1,para2);
    Object.setPrototypeOf(newRabbit,rabbitFunc);
    return newRabbit;
}
var rabbitFunc = {
    jump : function() {
        console.log('jump');
    }
}
Object.setPrototypeOf(rabbitFunc,vegFunc);

function cow(para1,para2) {
    var newCow = veg(para1,para2);
    Object.setPrototypeOf(newCow,cowFunc);
    return newCow;
}
var cowFunc = {
    milk : function() {
        console.log('milk');
    }
}
Object.setPrototypeOf(cowFunc,vegFunc);

function donkey(para1,para2) {
    var newDonkey = veg(para1,para2);
    Object.setPrototypeOf(newDonkey,donkeyFunc);
    return newDonkey;
}
var donkeyFunc = {
    load : function() {
        console.log('load');
    }
}
Object.setPrototypeOf(donkeyFunc,vegFunc);
// *****************************


function nonVeg(para1,para2) {
    var newNveg = animal(para1,para2);
    Object.setPrototypeOf(newNveg,nVegFunc)
    return newNveg;
}
var nVegFunc = {
    eatFish : function() {
        console.log('eat fish')
    }
}
Object.setPrototypeOf(nVegFunc,animalFeature);

function dog(para1,para2) {
    var newDog = nonVeg(para1,para2);
    Object.setPrototypeOf(newDog,dogFunc);
    return newDog;
}
var dogFunc = {
    bark : function() {
        console.log('bow bow booooowwww');
    }
}
Object.setPrototypeOf(dogFunc,nVegFunc);

function lion(para1,para2) {
    var newLion = nonVeg(para1,para2);
    Object.setPrototypeOf(newLion,dogFunc);
    return newLion;
}
var lionFunc = {
    roar : function() {
        console.log('ushshhsh fk uuuuu');
    }
}
Object.setPrototypeOf(lionFunc,nVegFunc);


