/*
 *
 * Categories actions
 *
 */

import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_ERROR,
} from './constants';

export function getInfo() {
  return {
    type: GET_INFO,
  };
}

export function getInfoSuccess(payload) {
  return {
    type: GET_INFO_SUCCESS,
    payload,
  };
}

export function getInfoError(err) {
  return {
    type: GET_INFO_ERROR,
    err,
  };
}

export function getCategories(payload) {
  return {
    type: GET_CATEGORIES,
    payload,
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
