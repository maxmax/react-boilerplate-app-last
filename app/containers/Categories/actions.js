/*
 *
 * Categories actions
 *
 */

import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from './constants';

export function getCategories() {
  return {
    type: GET_CATEGORIES,
  };
}

export function getCategoriesSuccess(payload) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload,
  };
}

export function getCategoriesError(err) {
  return {
    type: GET_CATEGORIES_ERROR,
    err,
  };
}
