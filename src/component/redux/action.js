import * as actionType from './actionTypes';
export const addNewCourse = (coursename) =>({
    type: actionType.ADD_NEW_COURSE,
    payload:{
        coursename
    }
})

export const resetCourse = () =>({
    type: actionType.RESET_COURSE
})