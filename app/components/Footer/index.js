import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
        <section>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <A href="https://twitter.com/mxstbr">api.appssaga.com</A>,
            }}
          />
        </section>
      </section>
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
