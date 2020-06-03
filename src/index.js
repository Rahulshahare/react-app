/**
 * 4 steps while follow building redux app
 * 
 * 1. Design the store - decide what to keep in store
 * 2. Design the actions - actions that user can perform in this application
 * 3. Create a reducer - this reducer take and action and return the new state
 * 4. Set up the store - set store based on reducer
 */

 /**
  * as this app is concern
  * courseList holding list of coursename in state,
  * so we want courseList to be hold by redux 
  * [
  *     {
  *         id
  *         coursename
  *     }
  * ]
  * this could be the store
  */