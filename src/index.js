import { Map } from 'immutable';

let book = Map({ title: "Shivaji Maharaj" });

// function publish(book){
//     book.isPublished = true; //this add new property called isPublished and set value to true
// }

// publish(book);

console.log(book.get("title"));