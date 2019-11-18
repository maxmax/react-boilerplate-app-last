import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requestCategoriesApi';
import {
  getCategoriesSuccess,
  getCategoriesError,
  getInfoSuccess,
  getInfoError,
} from './actions';

import { GET_CATEGORIES, GET_INFO } from './constants';

export function* getInfo() {
  const requestURL = '/wp-json/';
  // const requestURL = '/wp-json/wp/v2/tags';
  // const requestURL = '/wp-json/wp/v2/categories';
  // http://demo.wp-api.org/wp-json/wp/v2/categories
  // http://demo.wp-api.org/wp-json/wp/v2/tags

  try {
    const response = yield call(request, requestURL);
    // console.log('getInfo response', response);
    yield put(getInfoSuccess(response));
  } catch (err) {
    yield put(
      getInfoError({
        statusText: 'Info Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export function* getCategories(payload) {
  const requestURL = `/wp-json/wp/v2/posts${payload.payload || '/'}`;

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    yield put(getCategoriesSuccess(response));
  } catch (err) {
    yield put(
      getCategoriesError({
        statusText: 'Categories Something went wrong, please try again!',
        body: err,
      }),
    );
  }
}

export default function* categoriesSaga() {
  yield takeLatest(GET_INFO, getInfo);
  yield takeLatest(GET_CATEGORIES, getCategories);
}
