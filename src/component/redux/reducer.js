import { combineReducers } from 'redux';
import courses from './courseReduer';
import users from './userReducer';

const reducer = combineReducers({
    courses,
    users
})


export default reducer;