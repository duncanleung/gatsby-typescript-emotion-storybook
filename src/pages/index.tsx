import React from 'react';
import {
  injectIntl,
  FormattedMessage,
  InjectedIntlProps,
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { Button } from '~/components/Button';

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'homepage.title' })} />

      <div>
        <Button tag="link" to="/browse-all/" color="secondary">
          <FormattedMessage id="auth.login" />
        </Button>
      </div>
    </Layout>
  );
};

export default injectIntl(Index);
