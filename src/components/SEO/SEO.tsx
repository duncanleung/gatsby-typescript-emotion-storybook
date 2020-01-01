import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { injectIntl, InjectedIntlProps } from 'gatsby-plugin-intl';
import { Location } from '@reach/router';

type Props = {
  /** Description text for the description meta tags */
  description?: string;
} & HelmetProps &
  InjectedIntlProps;

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({ children, description = '', title, intl }) => {
  const metaDescription = description || 'Welcome to my website';

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: intl.locale,
          }}
          title={title}
          titleTemplate="%s | Website"
        >
          <meta property="description" content={metaDescription} />

          {/* OG tags */}
          <meta
            property="og:url"
            content={process.env.GATSBY_SITE_URL + location.pathname}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content={intl.locale} />

          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default injectIntl(SEO);
