import { FETCH_USERDETAILS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERDETAILS:
    return [ action.payload.data ];
  }
  return state;
}
