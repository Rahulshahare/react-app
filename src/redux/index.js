import store from './store';
import { courseAdded, courseRemoved, courseResolved, dynamicCourseAdded } from './actions';

const unsubcribe = store.subscribe( ()=>{
    console.log("Store Change", store.getState());
});

store.dispatch(courseAdded("First Course Name"));
store.dispatch(courseAdded("Second Course Name"));
store.dispatch(dynamicCourseAdded());
store.dispatch(courseResolved(2));

store.dispatch({
    type: 'INCREASE'
});
store.dispatch({
    type: 'DECREASE'
});
store.dispatch({
    type: 'DECREASE'
});

unsubcribe(); // after this we are not going to get notified if the store changes
store.dispatch(courseRemoved(1));

console.log(store.getState());

/**
 * Mission: set resolve to true on click
 * solution : first create new action type in actionTyes
 * then create new action in action
 * then for that action type define the operation on reducer
 * last dispatch the action bro
 * :)
 */