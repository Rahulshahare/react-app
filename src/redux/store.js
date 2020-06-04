import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer); //here just referencing reducer function

export default store;
