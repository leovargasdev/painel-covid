import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import InputSearch from '~/components/InputSearch';
import listCities from '../../cities';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: flex-end;
  font-size: 75px;
  font-weight: 400;
  margin: 10px 0 20px;
  font-family: 'Palanquin Dark', sans-serif;

  > div {
    width: 60px;
    margin-right: 16px;
  }

  ${media.lessThan('large')`
    font-size: 30px;
    > div {
      width: 26px;
      margin-right: 8px;
    }
  `};
`;

const Content = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  align-items: stretch;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  `};
`;

const City = styled(AniLink)`
  display: flex;
  align-items: center;
  padding: 30px;
  margin-top: 20px;

  background: ${({ theme }) => theme.box};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 6px;

  transition: all ease 0.6s;

  span {
    flex: 1;
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
  }

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.primary};
  }

  &:hover{
    transform: scale(1.03);
    border-color: ${({ theme }) => theme.orange};
    background: ${({ theme }) => theme.blueDark};

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.orange};
      transition: color 2s;
    }
  }

  ${media.lessThan('large')`
    padding: 20px;
    margin-top: 10px;

    span {
      font-size: 20px;
    }
    svg {
      width: 25px;
      height: 25px;
    }
  `};

`;

const IndexPage = () => {
  const imageDefault = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "covid-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const originalCities = Object.keys(listCities).sort();
  const [cities, setCities] = useState(originalCities);
  const [citySearch, setCitySearch] = useState('');

  useEffect(() => {
    const resultSearch = originalCities.filter((city) => city.includes(citySearch));
    setCities(resultSearch);
  }, [citySearch]);

  return (
    <Layout route="/" city="Painel">
      <Container>
        <Title>
          <div>
            <Img fluid={imageDefault.image.childImageSharp.fluid} alt="Icone coronavírus" title="Icone coronavírus" />
          </div>
          Painel do Coronavírus
        </Title>

        <InputSearch onChange={setCitySearch} />

        <Content>
          {cities.map((city) => (
            <City to={listCities[city].slug} key={city}>
              <span>{listCities[city].name}</span>
              <FaAngleRight />
            </City>
          ))}
        </Content>
      </Container>
    </Layout>
  );
};

export default IndexPage;
