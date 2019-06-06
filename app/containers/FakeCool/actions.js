/*
 *
 * FakeCool actions
 *
 */

import {
  GET_FAKE_COOL,
  GET_FAKE_COOL_SUCCESS,
  GET_FAKE_COOL_ERROR,
} from './constants';

export function getFakeCool() {
  return {
    type: GET_FAKE_COOL,
  };
}

export function getFakeCoolSuccess(payload) {
  return {
    type: GET_FAKE_COOL_SUCCESS,
    payload,
  };
}

export function getFakeCoolError(err) {
  return {
    type: GET_FAKE_COOL_ERROR,
    err,
  };
}
