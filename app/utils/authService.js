// in dev on redux user info
// import { push, replace } from 'react-router-redux';
import currentUser from 'utils/userService';
import { setClient } from 'containers/Client/actions';

function checkAuthorization(dispatch) {
  const user = currentUser.getUserInfo();
  // const token = currentUser.getToken();

  // check user by api
  // if (token && token.jwt) {
  //  checkAuthorizationApi(token.jwt, dispatch);
  // }

  if (user) {
    dispatch(setClient(user));
    return true;
  }

  return false;
}

export function checkProtectedAuthorization(props) {
  const { dispatch } = props;
  // const client = getState().client;
  // if (client && client.token) return getIndexAuthorized();
  if (checkAuthorization(dispatch)) return false;
  return false;
}
