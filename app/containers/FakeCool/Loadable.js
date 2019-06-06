/**
 *
 * Asynchronously loads the component for FakeCool
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
