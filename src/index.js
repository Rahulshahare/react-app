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

  const wrapInDiv = str => `<div>${str}</div>`; //its Templating

  //these are reusable function

  const result = wrapInDiv(toLowerCase(trimStr(input)));
  //its Functional Composition, toLowerCase takes the result of trimStr and convert it to lowercase
  //Anather level of Function Composition
  /** Here we are reading above is like right to left,
   * first trimStr then convert the result to lowercase
   * and then wrap it into div.
   */


  const transform =  compose(wrapInDiv, toLowerCase, trimStr);
  console.log(transform(input));
  /**
   * lodash compose also read from right to left
   * first trimStr then it gonna pass it from toLowerCase then 
   * wrap it in div.
   * lodash compose will be usefull if we have more funtions to procced
   */

  const transform = pipe(trimStr, toLowerCase, wrapInDiv);
  console.log(transform(input));

   /**
    * Now with pipe lodash function its easy for us to read functions.
    * from start to end
    * let to right
    */

 