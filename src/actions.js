import * as actions from './actionTypes';
/**
 * Lets create action creators 
 * if wa wann dispatch same action multiple time,
 * writing the same code is not a solution 
 * so lets create here
 */

export function courseAdded(){
    return{
        type: actions.COURSE_ADDED,
        payload:{
            courseName: makeid(10)
        }
    }
}

export function courseRemoved(id){
    return{
        type: actions.COURSE_REMOVED,
        payload:{
            id
        }
    }
}

export const courseResolved = id =>({
    type: actions.COURSE_RESOLVED,
    payload:{
        id
    }
})

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
 