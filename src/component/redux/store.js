import { createStore , combineReducers} from 'redux';
import courses from './reducer';
import users from './userReducer';

const reducer = combineReducers({
    courses,
    users
})

const store = createStore(reducer);

export default store;