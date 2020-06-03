const person = { name: "Wizkumar" } //person is a object with name property

const tar = Object.assign({} ,person, { name: "Javascript", age: 25, pets : { name:"wiz" , color:"Black" }, list:["A", "B", "C"] }); 
// Object.assign takes 3 arguments, target object, Source object and optionally we can pass updated properites to this object


tar.list.map(a =>{
    console.log(a)
})

// mapping array from object