import { combineReducers } from 'redux';

// Reducers
import APIReducer from './API-reducer';
import AppReducer from './App-reducer';
// Combine Reducers
var reducers = combineReducers({
    api: APIReducer,
    app: AppReducer
});

export default reducers;