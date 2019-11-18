// Sample request
import 'whatwg-fetch';

const apiEndpoint = process.env.API_URL;

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  if (response.postsTotal) {
    return response.json().then(json => {
      const data = {
        posts: json,
        postsTotal: Number(response.postsTotal),
      };
      return data;
    });
  }

  return response.json();
}

/**
 * Checks if a Headers
 */

function checkHeader(response) {
  // check authorization
  if (response.headers.get('authorization')) {
    console.log('authorization!');
  }
  if (response.headers.get('x-wp-TotalPages')) {
    // X-WP-Total: 3
    // X-WP-TotalPages: 2
    // response.postsTotal = response.headers.get('X-WP-Total');
    response.postsTotal = response.headers.get('X-WP-TotalPages');
    // response.postsTotal = response.headers.get('x-wp-total');
    return response;
  }
  return response;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const requestOptions = Object.assign({}, options);

  const requestUrl = `${apiEndpoint}${url}`;

  return fetch(requestUrl, requestOptions)
    .then(checkStatus)
    .then(checkHeader)
    .then(parseJSON);
}
