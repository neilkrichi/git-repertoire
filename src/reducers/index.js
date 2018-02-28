import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import UserDetailsReducer from './reducer_userdetails'

const rootReducer = combineReducers({
  users: UsersReducer,
  userdetails: UserDetailsReducer
});

export default rootReducer;
