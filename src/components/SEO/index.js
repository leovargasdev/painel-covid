import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import imgDefault from '~/images/profile.jpg';

function SEO({ description, lang, meta, title, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || imgDefault;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:image',
          content: metaImage
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Site pessoal do Leonardo Vargas'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:url',
          content: url
        },
        {
          name: 'twitter:image',
          content: metaImage
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'pt',
  meta: [],
  description: '',
  url: 'https://painelcoronavirus.com'
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.any,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
