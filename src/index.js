function sayHello() {
    return "Hello WOrld";
}

function greet(fnMessage) {
    return function(){
        return "HelloWorld";
    }
}

let fn = greet(); // here Assign a function to Variable

let message = fn(); //Assignning Returning Annonomous function to Variable
console.log(message);

/**
 * Here returning a annonomous funtion from a function
 * and assigning to variable and then calling it.
 * using function like variable here
 * Function are first class citizens
 */
