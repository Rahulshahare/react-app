/**
 * Lets Play with Arrays
 * adding , updating and removing items from array
 */

 const numbers = [1, 2, 3];

 //Adding
 //firstCopy then add new items
 const added = [...numbers, 4];

 //first Add then Copy itmes of array
 const added2 = [4, ...numbers];

 //Addin before a specific item, here adding item before 2
 const index = numbers.indexOf(3);

 const added3 = [
     ...numbers.slice(0, index), //return a whole array before item
     4,                            //add new item
     ...numbers.slice(index)     //return a remaining array after item
 ];

 //Removing
 //Here we wann remove 2

 const remove = numbers.filter(n => n !== 2)  //So Filter all items which are not equals to 2 

 console.log(remove);