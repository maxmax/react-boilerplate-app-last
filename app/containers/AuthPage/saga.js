import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requestBeApi';
import currentUser from 'utils/userService';
import { setClient } from 'containers/Client/actions';
import {
  sendAuthSuccess,
  sendAuthError,
  sendSignUpSuccess,
  sendSignUpError,
} from './actions';

import { SEND_AUTH, SEND_SIGN_UP } from './constants';

export function* sendAuth({ payload }) {
  const { email, password } = payload;
  const requestURL = '/api/users/login';

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ user: { email, password } }),
    });
    yield put(sendAuthSuccess(response));
    yield put(setClient({ name: response.user.username }));
    currentUser.sendUserInfo({ name: response.user.username });
    currentUser.sendAuthorization(response.user.token);
  } catch (err) {
    yield put(
      sendAuthError({
        statusText: 'Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export function* sendSignUp({ payload }) {
  const { username, email, password } = payload;
  const requestURL = '/api/users';

  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ user: { username, email, password } }),
    });
    yield put(sendSignUpSuccess(response));
    yield put(setClient({ name: response.user.username }));
    currentUser.sendUserInfo({ name: response.user.username });
    currentUser.sendAuthorization(response.user.token);
  } catch (err) {
    yield put(
      sendSignUpError({
        statusText: 'Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export default function* authPageSaga() {
  yield takeLatest(SEND_AUTH, sendAuth);
  yield takeLatest(SEND_SIGN_UP, sendSignUp);
}
