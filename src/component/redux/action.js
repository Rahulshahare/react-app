export const addNewCourse = (coursename) =>({
    type: 'addingCourse',
    payload:{
        coursename
    }
})

export const resetCourse = () =>({
    type: 'resetCourse'
})