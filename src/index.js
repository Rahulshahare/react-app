function sayHello() {
    return "Hello WOrld";
}

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello)