const person = { name: "Wizkumar" } //person is a object with name property

const tar = Object.assign({} ,person, { name: "Javascript" }); 
// Object.assign takes 3 arguments, target object, Source object and optionally we can pass updated properites to this object

console.log(tar)