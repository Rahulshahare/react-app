import store from './store';
import { courseAdded } from './actions';

const unsubcribe = store.subscribe( ()=>{
    console.log("Store Change", store.getState());
});

store.dispatch(courseAdded("First Course Name"));
store.dispatch(courseAdded("Second Course Name"));


unsubcribe(); // after this we are not going to get notified if the store changes


console.log(store.getState());