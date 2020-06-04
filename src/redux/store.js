import { createStore , combineReducers} from 'redux';
import courses from './reducer';
import counter from './counterReducer';

const reducer = combineReducers({
    courses,
    counter
  })

const store = createStore(reducer); //here just referencing reducer function

export default store;
