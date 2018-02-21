import axios from 'axios'

const ROOT_URL = `https://api.github.com/search/users?q=`

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(username) {
  const url = `${ROOT_URL}${username}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_USERS,
    payload: request
  };
}
