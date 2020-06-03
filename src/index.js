import store from './store';
import * as actions from './actionTypes';

const unsubcribe = store.subscribe( ()=>{
    console.log("Store Change", store.getState());
});

store.dispatch({
    type: actions.COURSE_ADDED,
    payload:{
        courseName: "first Course Name"
    }
});
store.dispatch({
    type: actions.COURSE_ADDED,
    payload:{
        courseName: "first Course Name"
    }
});

unsubcribe(); // after this we are not going to get notified if the store changes

store.dispatch({
    type: actions.COURSE_REMOVED,
    payload:{
        id: 1
    }
})

console.log(store.getState());