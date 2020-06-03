import store from './store';

store.dispatch({
    type:"courseAdded",
    payload:{
        courseName: "first Course Name"
    }
});
console.log(store.getState());