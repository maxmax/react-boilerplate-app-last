/*
 *
 * Categories reducer
 *
 */
import { fromJS } from 'immutable';
import produce from 'immer';
import { GET_POST, GET_POST_SUCCESS, GET_POST_ERROR } from './constants';

// export const initialState = {};
const initialState = fromJS({
  pending: false,
  error: null,
  data: null,
});

/* eslint-disable default-case, no-param-reassign */
const categoriesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_POST:
        return state.set('error', null).set('pending', true);

      case GET_POST_SUCCESS:
        return state.set('pending', false).set('data', action.payload);

      case GET_POST_ERROR:
        return state.set('pending', false).set('error', action.err);

      default:
        return state;
    }
  });

export default categoriesReducer;
