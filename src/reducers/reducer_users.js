import { FETCH_USERS } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_USERS:
      return [ action.payload.data ];      
  }
  return state;
}
