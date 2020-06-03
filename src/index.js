const person = { 
    name: "Wizkumar", 
    address:{
        country: "India",
        city: "Mumbai"
    }
} //person is a object with name property

const updated = {...person, name:"javascript"}

updated.address.city = "Taiwan";

console.log( person );

/**
 * Here we have updated the property of new object but as it our both
 * objects person & updated reference to same so the person object is also change
 * 
 * as we want to update the new properties to new object
 */