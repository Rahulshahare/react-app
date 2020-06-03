import { Map } from 'immutable';

let book = Map({ title: "Shivaji Maharaj"});

function publish(book){
    return book.set("isPublished", true); //this way add new property called isPublished and set value to true
}

book = publish(book);

console.log(book.toJS());