/*
 *
 * FakeCool reducer
 *
 */

import { fromJS } from 'immutable';
import produce from 'immer';
import {
  GET_FAKE_COOL,
  GET_FAKE_COOL_SUCCESS,
  GET_FAKE_COOL_ERROR,
} from './constants';

// export const initialState = {};
const initialState = fromJS({
  pending: false,
  error: null,
  data: null,
});

/* eslint-disable default-case, no-param-reassign */
const fakeCoolReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_FAKE_COOL:
        return state.set('error', null).set('pending', true);

      case GET_FAKE_COOL_SUCCESS:
        return state.set('pending', false).set('data', action.payload);

      case GET_FAKE_COOL_ERROR:
        return state.set('pending', false).set('error', action.err);

      default:
        return state;
    }
  });

export default fakeCoolReducer;
