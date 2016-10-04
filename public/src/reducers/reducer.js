import { POST_SHORTEN } from '../actions/types';
const INTIAL_STATE = { message: ''};

export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case POST_SHORTEN:
      return {...state, data:action.payload, message: action.message};
  }
  return state;
}