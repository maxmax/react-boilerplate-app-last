const TOKEN_KEY = 'token';
const USER_INFO = 'userInfo';
const COMPANY_INFO = 'companyInfo';
const USER_LOCATION = 'userLocation';
const USER_STATUS = 'userStatus';
const { parse } = JSON;

export const currentUser = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },
  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null;
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null;
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    return currentUser.get(tokenKey);
  },

  getUserInfo(tokenKey = USER_INFO) {
    return currentUser.get(tokenKey);
  },

  sendUserInfo(response) {
    localStorage.setItem('userInfo', JSON.stringify(response));
  },

  sendAuthorization(response) {
    const token = { jwt: response };
    localStorage.setItem('token', JSON.stringify(token));
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
    // window.location = '/sign-in/';
  },
};

export default currentUser;
