import { POST_SHORTEN } from '../actions/types';
const INTIAL_STATE = { message: ''};
export default function (state = INTIAL_STATE, action) {  
  switch(action.type) {
    case POST_SHORTEN:
    	console.log('dispatched', action);
      return {state, message: action.payload.message };
  }
  return state;
}