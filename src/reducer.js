//[] the initial state
let lastId = 0;

function reducer(state, action){
    if(action.type === "courseAdded"){
        return[
            ...state,
            {   
                id: ++lastId,
                courseName: action.payload.courseName
            }
        ]
    }
}

/**
 * if the action type will be courseAdded
 * then return new array state, which haves 
 * previous state and new item
 */