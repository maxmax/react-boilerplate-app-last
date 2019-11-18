/*
 *
 * Categories reducer
 *
 */
import { fromJS } from 'immutable';
import produce from 'immer';
import {
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_ERROR,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from './constants';

// export const initialState = {};
const initialState = fromJS({
  infoPending: false,
  infoError: null,
  infoData: null,
  pending: false,
  error: null,
  data: null,
});

/* eslint-disable default-case, no-param-reassign */
const categoriesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_INFO:
        return state.set('infoError', null).set('infoPending', true);

      case GET_INFO_SUCCESS:
        return state.set('infoPending', false).set('infoData', action.payload);

      case GET_INFO_ERROR:
        return state.set('infoPending', false).set('infoError', action.err);

      case GET_CATEGORIES:
        return state.set('error', null).set('pending', true);

      case GET_CATEGORIES_SUCCESS:
        return state.set('pending', false).set('data', action.payload);

      case GET_CATEGORIES_ERROR:
        return state.set('pending', false).set('error', action.err);

      default:
        return state;
    }
  });

export default categoriesReducer;
