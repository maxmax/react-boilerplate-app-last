import { Map, List, fromJS, toJS } from 'immutable';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categories state domain
 */

const selectCategoriesDomain = state => state.categories;
// const selectCategoriesDomain = state => state.getIn('categories');
// console.log('selectCategoriesDomain', selectCategoriesDomain)

/**
 * Other specific selectors
 */

/**
 * Default selector used by Categories
 */

const makeSelectInfo = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['infoData']),
  );

const makeSelectInfoError = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['infoError']),
  );

const makeSelectInfoPending = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['infoPending']),
  );

const makeSelectCategories = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['data', 'posts']),
  );

const makeSelectCategoriesPostsTotal = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['data', 'postsTotal']) || 0,
  );

const makeSelectCategoriesError = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['error']),
  );

const makeSelectCategoriesPending = () =>
  createSelector(
    selectCategoriesDomain,
    (substate = Map()) => substate.getIn(['pending']),
  );

// export default makeSelectCategories;
export {
  selectCategoriesDomain,
  makeSelectCategoriesPostsTotal,
  makeSelectCategories,
  makeSelectCategoriesError,
  makeSelectCategoriesPending,
  makeSelectInfo,
  makeSelectInfoError,
  makeSelectInfoPending,
};
