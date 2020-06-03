import * as actions from './actionTypes';
/**
 * Lets create action creators 
 * if wa wann dispatch same action multiple time,
 * writing the same code is not a solution 
 * so lets create here
 */

export function courseAdded(courseName){
    return{
        type: actions.COURSE_ADDED,
        payload:{
            courseName: courseName
        }
    }
 }