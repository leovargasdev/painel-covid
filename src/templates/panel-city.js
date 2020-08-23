import React from 'react';
import PropTypes from 'prop-types';

import Layout from '~/components/Layout';
import Covid from '~/components/Covid';

const PanelCovidCityTemplate = ({ pageContext }) => {
  const { data: { cases, statusCases }, slug, label, name, lastUpdate } = pageContext;

  return (
    <Layout route={slug} city={name}>
      <Covid
        name={name}
        route={slug}
        data={{
          label,
          cases,
          lastUpdate,
          statusCases
        }}
        fonte="Coordenadoria Regional da Defesa Civil, 2020"
      />
    </Layout>
  );
};

export default PanelCovidCityTemplate;

PanelCovidCityTemplate.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      cases: PropTypes.any.isRequired,
      statusCases: PropTypes.any.isRequired
    }),
    slug: PropTypes.string.isRequired,
    label: PropTypes.arrayOf.isRequired,
    name: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired
  }).isRequired
};
