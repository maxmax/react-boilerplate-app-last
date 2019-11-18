import { Map, List, fromJS, toJS } from 'immutable';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categories state domain
 */

const selectPostDomain = state => state.post;
// const selectCategoriesDomain = state => state.getIn('categories');
// console.log('selectCategoriesDomain', selectCategoriesDomain)

/**
 * Other specific selectors
 */

/**
 * Default selector used by Categories
 */

const makeSelectPost = () =>
  createSelector(
    selectPostDomain,
    (substate = Map()) => substate.getIn(['data']),
  );

const makeSelectPostError = () =>
  createSelector(
    selectPostDomain,
    (substate = Map()) => substate.getIn(['error']),
  );

const makeSelectPostPending = () =>
  createSelector(
    selectPostDomain,
    (substate = Map()) => substate.getIn(['pending']),
  );

// export default makeSelectCategories;
export {
  selectPostDomain,
  makeSelectPost,
  makeSelectPostError,
  makeSelectPostPending,
};
