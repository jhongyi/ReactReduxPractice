import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers/ListReducer';

// TODO 正式
let config = () => {
    return createStore(reducers, applyMiddleware(reduxThunk));
}

export default config;