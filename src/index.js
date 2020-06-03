import { produce } from 'immer';

let book = { title: "Shivaji Maharaj"};

function publish(book){
    book.isPublished =  true; //this way add new property called isPublished and set value to true
}

publish(book);

console.log(book);