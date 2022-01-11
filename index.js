sayHello()
sayHello("Shea")

let thingy = {
    propA: "A",
    propB: 12,
    propC: null,
    funcProp: (a,b) => { return a + b }
}

let boo = thingy.funcProp(1,2);
console.log(boo)

let thingies = [1, 2, 3, "boop", { foo: ""}, undefined, null];

thingies.forEach(x => {
    if (x === "boop")
    {
        console.log("YAY")
    }
})
var numbers = thingies.filter(x => x == 1 || x == 2)
console.log(numbers);

let func = (param1, param2) => {
    console.log(param1)
    console.log(param2)
}
doAThing(func, thingy.propA, thingy.propB)

// Functions

function sayHello(nameToWrite)
{
    let name = "World"

    if (nameToWrite !== undefined)
    {
        name = nameToWrite
    }

    console.log(`Hello, ${name}!`)
}

function doAThing(thingToDo, ...params)
{
    console.log("DOINGATHING")
    thingToDo(...params)
    console.log("DID THE THING");
}