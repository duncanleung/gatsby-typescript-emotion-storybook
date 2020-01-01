import React from 'react';

import { FormattedMessage } from 'gatsby-plugin-intl';

import Button from './Button';

export default {
  title: 'Button',
};

export const Link = () => (
  <Button tag="link" to="test" isLoading>
    <FormattedMessage id="auth.login" />
  </Button>
);

export const Loading = () => (
  <Button isLoading>
    <FormattedMessage id="auth.login" />
  </Button>
);

export const Outline = () => (
  <Button isLoading variant="outline">
    <FormattedMessage id="auth.login" />
  </Button>
);

export const Secondary = () => (
  <Button color="secondary">
    <FormattedMessage id="auth.login" />
  </Button>
);
