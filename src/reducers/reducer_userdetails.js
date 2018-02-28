import { FETCH_USER_DETAILS } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return [ action.payload.data ];
  }
  return state;
}
