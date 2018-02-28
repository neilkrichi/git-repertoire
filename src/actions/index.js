import axios from 'axios'

const QUERY_URL = `https://api.github.com/search/users?q=`
const USER_URL = `https://api.github.com/users/`

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';

export function fetchUsers(query) {
  const q_url = `${QUERY_URL}${query}`;
  const request = axios.get(q_url);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchUserDetails(username) {
  const u_url = `${USER_URL}${username}`;
  const request = axios.get(u_url);

  return {
    type: FETCH_USER_DETAILS,
    payload: request
  };
}
