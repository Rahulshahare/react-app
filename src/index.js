const person = { name: "Wizkumar" } //person is a object with name property

const updated = Object.assign({} ,person, { name: "Javascript", age: 25, pets : { name:"wiz" , color:"Black" }, list:["A", "B", "C"] }); 
// Object.assign takes 3 arguments, target object, Source object and optionally we can pass updated properites to this object


console.log( updated );