import { Map, List, fromJS, toJS } from 'immutable';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fakeCool state domain
 */

const selectFakeCoolDomain = state => state.fakeCool;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FakeCool
 */

const makeSelectFakeCool = () =>
  createSelector(
    selectFakeCoolDomain,
    (substate = Map()) => substate.getIn(['data']),
  );

const makeSelectFakeCoolError = () =>
  createSelector(
    selectFakeCoolDomain,
    (substate = Map()) => substate.getIn(['error']),
  );

const makeSelectFakeCoolPending = () =>
  createSelector(
    selectFakeCoolDomain,
    (substate = Map()) => substate.getIn(['pending']),
  );

export {
  selectFakeCoolDomain,
  makeSelectFakeCool,
  makeSelectFakeCoolError,
  makeSelectFakeCoolPending,
};
