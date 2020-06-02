let input = "    Javascript   ";

/**
 * Mission is to trim the input
 * and Wrap it in Div
 */

 let output = "<div>"+ input.trim() +"</di>";

 /**
  * lets Solve this with functional Programming
  */

  function trimStr(str){
      return str.trim()
  }
  const trimStr = str => str.trim(); //MoreAdance

  function wrapInDiv(str){
      return "<div>"+ str +"</div>"
  }

  const wrapInDiv = str =>"<div>"+ str +"</div>"; //MoreAdane

  const wrapInDiv = str => `<div>${str}</div>`; //its Templating