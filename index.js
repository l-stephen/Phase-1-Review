//Create an arrow function that logs out a greeting "hello" + name
const greeting = name => {
    return "Hello " + name;
}
console.log(greeting("Stephen"));

//Create a greeting using a callback function
function greet(callback){
    console.log("Hello")
    callback();
}

//Callback Functions
function sayWorld(){
    console.log("World");
}

function sayName(){
    console.log("Stephen");
}

greet(sayWorld)
greet(sayName)






