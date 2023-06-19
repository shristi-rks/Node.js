//module wrapper function
console.log(__filename, __dirname);

class Person {
    constructor(name,age){
        this.name= name,
        this.age= age
    }

    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age}. `)
    }
    }
module.exports = Person;

// const Person = require("./person");

// const person1 = new Person("Shris", 36);

// console.log(person1);
