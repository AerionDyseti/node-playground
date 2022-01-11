let doNothing = require("./otherCode.js");

sayHello()
sayHello("Shea")
doNothing();

// Functions

function sayHello(nameToWrite)
{
    let name = "World";

    if (nameToWrite !== undefined)
    {
        name = nameToWrite
    }

    console.log(`Hello, ${name}!`);
}
