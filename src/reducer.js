//[] the initial state

function reducer(state, action){
    if(action.type === "courseAdded"){
        return[
            ...state,
            {
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