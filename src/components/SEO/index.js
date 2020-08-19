import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import imgDefault from '~/images/covid-share.png';

const SEO = ({ description, meta, title, image, route }) => {
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
      htmlAttributes={{ lang: 'pt-br' }}
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
          content: 'https://painelcoronavirus.com/'.concat(route)
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
          content: 'Painel Coronavírus'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:url',
          content: 'https://painelcoronavirus.com/'.concat(route)
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
};

SEO.defaultProps = {
  meta: [],
  description: '',
  image: '',
  route: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  route: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
