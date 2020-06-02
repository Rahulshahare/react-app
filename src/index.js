function sayHello() {
    return function(){
        return "Hello WOrld";
    }
}

function greet(fnMessage) {
    console.log(fnMessage());
}

let fn = sayHello(); // here Assign a function to Variable

let message = fn(); //Assignning Returning Annonomous function to Variable
console.log(message);

/**
 * Here 
 */
