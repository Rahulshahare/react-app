import store from './store';

const unsubcribe = store.subscribe( ()=>{
    console.log("Store Change", store.getState());
});

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

unsubcribe(); // after this we are not going to get notified if the store changes

store.dispatch({
    type:"courseRemoved",
    payload:{
        id: 1
    }
})

console.log(store.getState());