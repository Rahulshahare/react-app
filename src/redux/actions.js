import * as actionType from './actionTypes';
/**
 * Lets create action creators 
 * if wa wann dispatch same action multiple time,
 * writing the same code is not a solution 
 * so lets create here
 */

export function courseAdded(courseName){
    return{
        type: actionType.COURSE_ADDED,
        payload:{
            courseName
        }
    }
}

export function courseRemoved(id){
    return{
        type: actionType.COURSE_REMOVED,
        payload:{
            id
        }
    }
}

export const courseResolved = id =>({
    type: actionType.COURSE_RESOLVED,
    payload:{
        id
    }
})

export function dynamicCourseAdded(){
    return courseAdded(makeid(10))
}
//Function for generating random values
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

 /**
  * Actions for Counter Reducer
  */
export const increase = ()=>({
    type: 'INCREASE'
})

export const decrease = () =>({
    type: 'DECREASE'
})