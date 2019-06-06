import { CLIENT_SET, CLIENT_UNSET } from './constants';

const initialSate = {
  token: null,
  name: null,
};

const reducer = function clientReducer(state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return {
        name: action.payload.name,
      };

    case CLIENT_UNSET:
      return {
        name: null,
      };

    default:
      return state;
  }
};

export default reducer;
