const person = { 
    name: "Wizkumar", 
    address:{
        country: "India",
        city: "Mumbai"
    }
} //person is a object with name property

const updated = {...person, name:"javascript"}



console.log( updated );