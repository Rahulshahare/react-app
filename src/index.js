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

let numbers = [1,2,3];
numbers.map(number => number * 2) 
//Here map is Higher order funtion, so we take each number and multiplied by 2
