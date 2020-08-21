import React from 'react';

import Layout from '../components/Layout';
import Covid from '../components/Covid';

const PanelCovidCityTemplate = ({ pageContext }) => {
  const { data: { cases, statusCases }, slug, label, name } = pageContext;

  return (
    <Layout route={slug} city={name}>
      <Covid
        name={slug}
        data={{
          label,
          cases,
          lastUpdate: 'sadas',
          statusCases
        }}
        subtitle={name}
        fonte="Coordenadoria Regional da Defesa Civil, 2020"
      />
    </Layout>
  );
};

export default PanelCovidCityTemplate;
