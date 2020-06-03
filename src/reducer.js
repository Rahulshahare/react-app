//[] the initial state
let lastId = 0;

function reducer(state = [], action){
    switch(action.type){
        case "courseAdded" :
            return[
                ...state,
                {   
                    id: ++lastId,
                    courseName: action.payload.courseName
                }
            ];
        case "courseRemoved" :
            return state.filter( course => course.id !== action.payload.id)
        default: return state;
    }
     /**
      * These both are same we can do it switch or if-else
      */
    // if(action.type === "courseAdded"){
    //     return[
    //         ...state,
    //         {   
    //             id: ++lastId,
    //             courseName: action.payload.courseName
    //         }
    //     ];
    // }else if(action.type === "courseRemoved"){
    //     return state.filter( course => course.id !== action.payload.id)
    // }else{
    //     return state;
    // }
}

/**
 * if the action type will be courseAdded
 * then return new array state, which haves 
 * previous state and new item
 */

 /**
  * if the action type will be courseRemoved 
  * then we filter state for that given item then 
  * return course list without that item which have id equals provided id
  */

  /**
   * if action will not be found then simply return the state
   */