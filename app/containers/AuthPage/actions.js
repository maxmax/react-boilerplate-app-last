/*
 *
 * AuthPage actions
 *
 */

import {
  SEND_AUTH,
  SEND_AUTH_SUCCESS,
  SEND_AUTH_ERROR,
  SEND_SIGN_UP,
  SEND_SIGN_UP_SUCCESS,
  SEND_SIGN_UP_ERROR,
} from './constants';

export function sendAuth(payload) {
  return {
    type: SEND_AUTH,
    payload,
  };
}

export function sendAuthSuccess(payload) {
  return {
    type: SEND_AUTH_SUCCESS,
    payload,
  };
}

export function sendAuthError(err) {
  return {
    type: SEND_AUTH_ERROR,
    err,
  };
}

export function sendSignUp(payload) {
  return {
    type: SEND_SIGN_UP,
    payload,
  };
}

export function sendSignUpSuccess(payload) {
  return {
    type: SEND_SIGN_UP_SUCCESS,
    payload,
  };
}

export function sendSignUpError(err) {
  return {
    type: SEND_SIGN_UP_ERROR,
    err,
  };
}
