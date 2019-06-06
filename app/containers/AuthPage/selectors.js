import { Map, List, fromJS, toJS } from 'immutable';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authPage state domain
 */

const selectAuthPageDomain = state => state.authPage;

/**
 * Other specific selectors
 */

const selectClientDomain = state => state.client;

/**
 * Default selector used by AuthPage
 */

const makeSelectAuth = () =>
  createSelector(
    selectAuthPageDomain,
    (substate = Map()) => substate.getIn(['data']),
  );

const makeSelectAuthError = () =>
  createSelector(
    selectAuthPageDomain,
    (substate = Map()) => substate.getIn(['error']),
  );

const makeSelectAuthPending = () =>
  createSelector(
    selectAuthPageDomain,
    (substate = Map()) => substate.getIn(['pending']),
  );

const makeSelectAuthClient = () =>
  createSelector(
    selectClientDomain,
    // (substate = Map()) => substate.getIn(['name']),
    (substate = Map()) => substate.name,
  );

export {
  selectAuthPageDomain,
  makeSelectAuth,
  makeSelectAuthError,
  makeSelectAuthPending,
  makeSelectAuthClient,
};
