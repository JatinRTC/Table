import {createStore} from 'redux';
import Reducer from './reducer/reducer.js'


const store = createStore(
    Reducer,
)

export default store;
