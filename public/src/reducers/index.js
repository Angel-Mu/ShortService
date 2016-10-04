import { combineReducers } from 'redux';  
import ShortenReducer from './reducer';

 const rootReducer = combineReducers({
   shorten_reducer: ShortenReducer,
 });

 export default rootReducer;