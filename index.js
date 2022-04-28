const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

function sayHelloToLiz() {
    console.log("hello, Liz!");
}
function sayHelloToSamip() {
    console.log("hello, Samip!");
}
function sayHelloToGuadalupe() {
    console.log("hello, Guadalupe!");
}
sayHelloToLiz();
sayHelloToGuadalupe();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

function sayHelloTo(firstName){
    console.log(`hello ${firstName}!`)
}
sayHelloTo("Guadalupe")

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "Hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    return x + y;
  }
  console.log(add(1,2));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));
