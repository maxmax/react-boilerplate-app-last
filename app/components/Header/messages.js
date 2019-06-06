/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  auth: {
    id: `${scope}.auth`,
    defaultMessage: 'Auth',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
});
