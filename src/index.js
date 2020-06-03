import store from './store';

store.subscribe( ()=>{
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

store.dispatch({
    type:"courseRemoved",
    payload:{
        id: 1
    }
})

console.log(store.getState());