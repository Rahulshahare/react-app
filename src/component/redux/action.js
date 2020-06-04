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

export const deleteCourse = (coursename) =>({
    type: actionType.DELETE_COURSE,
    payload:{
        coursename
    }
})

/**
 * Action for userREducer
 */

export const addNewUser = (user) =>({
    type: actionType.ADD_NEW_USER,
    payload:{
        user
    }
})

