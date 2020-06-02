function sayHello() {
    return "Hello WOrld";
}

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello)

/**
 * here we can assign function to Variable or
 * pass it to a function 
 */