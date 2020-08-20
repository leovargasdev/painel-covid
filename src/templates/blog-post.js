import React from 'react';

import Layout from '../components/Layout';
import Covid from '../components/Covid';

const BlogPostTemplate = ({ pageContext }) => {
  const { data: { cases, statusCases }, slug, label } = pageContext;

  return (
    <Layout route={slug} city={slug}>
      <Covid
        name="blumenau"
        data={{
          label,
          cases,
          lastUpdate: 'sadas',
          statusCases
        }}
        fonte="aaaaaa"
      />
    </Layout>
  );
};

export default BlogPostTemplate;
