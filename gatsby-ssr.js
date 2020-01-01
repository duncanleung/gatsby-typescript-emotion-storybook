import React from 'react';
import { App } from './src/components/App';

const supportedLanguages = require('./src/utils/i18n/supportedLanguages');

require('dotenv').config({
  path: '.env',
});

// Duplicated in gatsby-browser.js for client side rendering
export const wrapRootElement = props => <App {...props} />;

export const onRenderBody = ({ pathname, setHeadComponents }) => {
  // Create a string to allow a regex replacement for SEO hreflang links: https://support.google.com/webmasters/answer/189077?hl=en
  const supportedLocaleRegexGroups = supportedLanguages
    .map(language => language.languageTag)
    .join('|');

  const hrefLangLinks = [
    ...supportedLanguages.map(language => {
      // Must be a fully qualified site URL
      const href = `${process.env.GATSBY_SITE_URL}/${language.languageTag +
        pathname.replace(new RegExp(`^/(${supportedLocaleRegexGroups})`), '')}`;

      return (
        <link
          hrefLang={language.languageTag}
          href={href}
          key={`href-lang-${language.languageTag}`}
        />
      );
    }),
  ];

  // Async embed code from Typekit/Adobe @link https://helpx.adobe.com/fonts/using/embed-codes.html#JavaScriptembedcode
  const typeKitScript = [
    <script
      key="typekit-embed"
      dangerouslySetInnerHTML={{
        __html: `
          (function(d) {
            var config = {
              kitId: 'lun5gjj',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `,
      }}
    />,
  ];

  setHeadComponents([...hrefLangLinks, ...typeKitScript]);
};
