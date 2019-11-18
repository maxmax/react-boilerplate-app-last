/*
 *
 * Categories actions
 *
 */

import { GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from './constants';

export function getPost(payload) {
  return {
    type: GET_POST,
    payload,
  };
}

export function getPostSuccess(payload) {
  return {
    type: GET_POST_SUCCESS,
    payload,
  };
}

export function getPostError(err) {
  return {
    type: GET_POST_ERROR,
    err,
  };
}
