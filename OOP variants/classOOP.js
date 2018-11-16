class animal  {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('eat')
    }
    move() {
        console.log('move')
    } 
}
// veg
class veg extends animal{
    constructor(name,age) {
        super(name,age);
    }
    eatGrass() {
        console.log('eat grass');
    }
}
class rabbit extends veg{
    constructor(name,age) {
        super(name,age);
    }
    jump() {
        console.log('jump jump');
    }
}
class cow extends veg{
    constructor(name,age) {
        super(name,age);
    }
    milk() {
        console.log('ammaaaaa');
    }
}
class donkey extends veg{
    constructor(name,age) {
        super(name,age);
    }
    load() {
        console.log('ehhe ehehehe eheheh');
    }
}
// non veg
class nonVeg extends animal{
    constructor(name,age) {
        super(name,age);
    }
    eatFish() {
        console.log('eat grass');
    }
}
class dog extends nonVeg{
    constructor(name,age) {
        super(name,age);
    }
    bark() {
        console.log('bow bow bowww');
    }
}
class lion extends nonVeg{
    constructor(name,age) {
        super(name,age);
    }
    roar() {
        console.log('ajjjj efffff');
    }
}
