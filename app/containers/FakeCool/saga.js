import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requestBeApi';
import { getFakeCoolSuccess, getFakeCoolError } from './actions';

import { GET_FAKE_COOL } from './constants';

export function* getFakeCoolSaga() {
  const requestURL = '/api/fake/cool';
  try {
    const response = yield call(request, requestURL);
    yield put(getFakeCoolSuccess({ cool: response }));
  } catch (err) {
    yield put(
      getFakeCoolError({
        statusText: 'Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export default function* fakeCoolSaga() {
  yield takeLatest(GET_FAKE_COOL, getFakeCoolSaga);
}
