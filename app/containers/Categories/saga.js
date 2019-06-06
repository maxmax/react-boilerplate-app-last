import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requestApi';
import { getCategoriesSuccess, getCategoriesError } from './actions';

import { GET_CATEGORIES } from './constants';

export function* getCategories() {
  const requestURL = '/wp-json/';
  try {
    const response = yield call(request, requestURL);
    yield put(getCategoriesSuccess(response));
  } catch (err) {
    yield put(
      getCategoriesError({
        statusText: 'Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export default function* categoriesSaga() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}
