import { compose, pipe } from 'lodash/fp';

let input = "    Javascript   ";

/**
 * Mission is to trim the input
 * and Wrap it in Div
 */

 let output = "<div>"+ input.trim() +"</di>";

 /**
  * lets Solve this with functional Programming
  */

  const trimStr = str => str.trim(); //MoreAdance
  
  const toLowerCase = str => str.toLowerCase();

//   const wrapInDiv = str => `<div>${str}</div>`; //its Templating

  const wrap = (type, str) =>`<${type}>${str}</${type}>`;
            //Here we can wrap input in div or span or any other element. its a Dynamic Wrap

  //these are reusable function



  const transformx = pipe(trimStr, toLowerCase, wrap);
  console.log(transformx(input));

   /**
    * 
    */

 