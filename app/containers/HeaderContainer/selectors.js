import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the headerContainer state domain
 */

const selectHeaderContainerDomain = state =>
  state.headerContainer || initialState;

/**
 * Other specific selectors
 */

const selectClientDomain = state => state.client;

/**
 * Default selector used by HeaderContainer
 */

const makeSelectHeaderContainer = () =>
  createSelector(
    selectHeaderContainerDomain,
    substate => substate,
  );

const makeSelectAuthClient = () =>
  createSelector(
    selectClientDomain,
    // (substate = Map()) => substate.getIn(['name']),
    (substate = Map()) => substate.name,
  );

// export default makeSelectHeaderContainer;
// export { selectHeaderContainerDomain };
export { makeSelectHeaderContainer, makeSelectAuthClient };
