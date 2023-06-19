// const Person = require("./person");

// const person1 = new Person("Shris", 36);

// console.log(person1);

const Logger = require("./logger");

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');