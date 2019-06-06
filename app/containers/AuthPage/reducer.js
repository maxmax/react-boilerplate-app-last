/*
 *
 * AuthPage reducer
 *
 */
import { fromJS } from 'immutable';
import produce from 'immer';
import {
  SEND_AUTH,
  SEND_AUTH_SUCCESS,
  SEND_AUTH_ERROR,
  SEND_SIGN_UP,
  SEND_SIGN_UP_SUCCESS,
  SEND_SIGN_UP_ERROR,
} from './constants';

// export const initialState = {};
const initialState = fromJS({
  pending: false,
  error: null,
  data: null,
  signUpPending: false,
  signUpError: null,
  signUpData: null,
});

/* eslint-disable default-case, no-param-reassign */
const authPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SEND_AUTH:
        return state.set('error', null).set('pending', true);

      case SEND_AUTH_SUCCESS:
        return state.set('pending', false).set('data', action.payload);

      case SEND_AUTH_ERROR:
        return state
          .set('data', null)
          .set('pending', false)
          .set('error', action.err);

      case SEND_SIGN_UP:
        return state.set('signUpError', null).set('signUpPending', true);

      case SEND_SIGN_UP_SUCCESS:
        return state
          .set('signUpPending', false)
          .set('signUpData', action.payload);

      case SEND_SIGN_UP_ERROR:
        return state
          .set('signUpData', null)
          .set('signUpPending', false)
          .set('signUpError', action.err);

      default:
        return state;
    }
  });

export default authPageReducer;
