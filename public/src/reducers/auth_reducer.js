import { TEST_ACTION } from '../actions/types';
const INTIAL_STATE = { message: ''};
export default function (state = INTIAL_STATE, action) {  
  switch(action.type) {
    case TEST_ACTION:
      return { ...state, message: action.payload.message };
  }
  return state;
}