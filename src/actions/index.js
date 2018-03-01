import axios from 'axios'

const QUERY_URL = `https://api.github.com/search/users?q=`
const USER_URL = `https://api.github.com/users/`

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERDETAILS = 'FETCH_USERDETAILS';

export function fetchUsers(query) {
  const q_url = `${QUERY_URL}${query}`;
  const first_request = axios.get(q_url);
  return {
    type: FETCH_USERS,
    payload: first_request
  };
}

export function fetchUserDetails(username) {
  const u_url = `${USER_URL}${username}`;
  const second_request = axios.get(u_url);
  return {
    type: FETCH_USERDETAILS,
    payload: second_request
  };
}
