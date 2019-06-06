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

const makeSelectCategories = () =>
  createSelector(
    selectCategoriesDomain,
    // substate => substate,
    (substate = Map()) => substate.getIn(['data']),
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
  makeSelectCategories,
  makeSelectCategoriesError,
  makeSelectCategoriesPending,
};
