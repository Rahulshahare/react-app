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

  const wrapInDiv = str => `<div>${str}</div>`; //its Templating

  //these are two reusable function

  const result = wrapInDiv(trimStr(input));
                    //its Functional Composition
                    