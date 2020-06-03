import { produce } from 'immer';

let book = { title: "Shivaji Maharaj"};

function publish(book){
    // book.isPublished =  true;
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
console.log(updated);