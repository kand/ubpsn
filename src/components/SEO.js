// @flow

import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// $FlowFixMe[cannot-resolve-module] - Flow can't find ico file?
import faviconIco from '../img/favicon_1.ico';
import faviconPng from '../img/favicon_2.png';


export default function SEO() {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        //faviconIco,
        //faviconPng,
        defaultDescription,
        siteUrl,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: defaultTitle,
        description: defaultDescription,
        url: `${siteUrl}${pathname}`,
        faviconIco: `${faviconIco}`,
        faviconPng: `${faviconPng}`,
    };

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <link rel="icon" type="image/x-icon" href={seo.faviconIco} />
            <link rel="icon" type="image/png" href={seo.faviconPng} />

            {seo.url && <meta property="og:url" content={seo.url} />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
        </Helmet>
    );
};

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        faviconIco: faviconIco
        faviconPng: faviconPng
        siteUrl: url
        twitterUsername
      }
    }
  }
`;
