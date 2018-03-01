import { FETCH_USERDETAILS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERDETAILS:
    console.log(action.payload.data);
    return [ action.payload.data ];
  }
  return state;
}
