import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requestApi';
import { getPostSuccess, getPostError } from './actions';

import { GET_POST } from './constants';

export function* getPost(payload) {
  const requestURL = `/wp-json/wp/v2/posts?slug=${payload.payload || '/'}`;

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    console.log('saga getPost', response[0]);
    yield put(getPostSuccess(response[0]));
  } catch (err) {
    yield put(
      getPostError({
        statusText: 'Post Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export default function* postSaga() {
  yield takeLatest(GET_POST, getPost);
}
