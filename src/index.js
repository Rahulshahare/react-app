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

  //these are two reusable function

  const result = wrapInDiv(toLowerCase(trimStr(input)));
                    //its Functional Composition, toLowerCase takes the result of trimStr and convert it to lowercase
                    //Anather level of Function Composition
                    /** Here we are reading above is like right to left,
                     * first trimStr then convert the result to lowercase
                     * and then wrap it into div.
                     */
