/**
 * Lets learn a bit about Currying
 */

 function add(a){
     return function(b){
        return a + b;
     }
 }

 const add1 = add(1) // this return a function

 add1(5) //this function add 1 to 5 and return 6

 add(1)(5) //Simiar to above, we cann function as pass the arguments

 //what is most imortant is here is the function have single parameter
 //Lets make it arrow functon

 const add2 = a =>b => a + b; // (a) (b) => a + b; Instead of separating comma, we are currying a function

//  add2 is similar to add

//  functionName = firstParameter => secondParameter => returnExpression