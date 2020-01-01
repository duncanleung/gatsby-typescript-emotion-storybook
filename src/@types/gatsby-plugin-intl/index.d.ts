declare module 'gatsby-plugin-intl' {
  /* eslint-disable-next-line import/no-extraneous-dependencies */
  import ReactIntl from 'react-intl';
  import Gatsby from 'gatsby';

  // Type mapping from react-intl
  export import injectIntl = ReactIntl.injectIntl;
  export import InjectedIntl = ReactIntl.InjectedIntl;
  export import InjectedIntlProps = ReactIntl.InjectedIntlProps;
  export import FormattedMessage = ReactIntl.FormattedMessage;
  export import FormattedHTMLMessage = ReactIntl.FormattedHTMLMessage;
  export import FormattedNumber = ReactIntl.FormattedNumber;

  // Type mapping from Gatsby
  export import Link = Gatsby.Link;
  export import navigate = Gatsby.navigate;
}
