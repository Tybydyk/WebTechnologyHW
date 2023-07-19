const nameInput =prompt("What is your name? : ").toUpperCase();

function greeting(name) {
    var message = "Hello user with the name " + name + " !";
    return message;
}
console.log(greeting(nameInput));