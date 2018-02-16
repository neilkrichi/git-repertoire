import axios from 'axios';

export function fetchUsers(){
  return function(dispatch){
    axios.get('https://api.github.com/users/neilkrichi')
      .then((response) => {
        dispatch({type:'FETCH_USERS_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
      })
  }
}
