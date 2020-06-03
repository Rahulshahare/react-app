const person = { 
    name: "Wizkumar", 
    address:{
        country: "India",
        city: "Mumbai"
    },
    list:[
        "A", "B", "C"
    ]
} //person is a object with name property

const updated = {
    ...person, 
    address:{
        ...person.address,
        city:"Taiwan"
    },
    name:"javascript",
    list:[
        ...person.list,
        "Z", "Y", "X", "W"
    ]
}

console.log( updated );

/**
 * Here we have updated the property of new object but as it our both
 * objects person & updated reference to same so the person object is also change
 * 
 * as we want to update the new properties to new object
 * 
 * 
 * so this way we are able to update specific property of object.
 * 
 * here we have added new item to list array i.e. list property of updated object
 */