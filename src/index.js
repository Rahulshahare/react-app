import store from './store';

store.dispatch({
    type:"courseAdded",
    payload:{
        courseName: "first Course Name"
    }
});
store.dispatch({
    type:"courseAdded",
    payload:{
        courseName: "first Course Name"
    }
});

store.dispatch({
    type:"courseRemoved",
    payload:{
        id: 1
    }
})

console.log(store.getState());