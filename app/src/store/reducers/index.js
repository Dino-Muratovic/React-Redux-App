import { combineReducers } from 'redux';
import {quotesReducer as quotes} from './quotesReducer';

export default combineReducers({ 
    quotes
})

//this combines reducers if there are multiple ones by calling combineReducer
//function