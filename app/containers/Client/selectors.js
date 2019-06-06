import { createSelector } from 'reselect';

const selectClientDomain = state => state.getIn(['client']);

export const selectClient = () =>
  createSelector(
    selectClientDomain,
    substate => substate,
  );
