function sayHello() {
    return "Hello WOrld";
}

function greet(fnMessage) {
    return function(){
        return "HelloWorld";
    }
}

let fn = sayHello(); // here Assign a function to Variable