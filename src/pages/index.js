import React from 'react';
import styled from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

import Layout from '~/components/Layout';
import cities from '../../cities';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  display: grid;
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
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 6px;

  transition-duration: 0.8s;

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
    background: ${({ theme }) => theme.blueDark};
    border-color: ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.purple};
    transform: translateX(5px);
    -webkit-box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.2);
    box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.2);
    cursor: pointer;

    svg, span {
      color: ${({ theme }) => theme.purple};
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
  const namesCities = Object.keys(cities);
  namesCities.sort();

  return (
    <Layout route="/" city="Painel" contact={false}>
      <Container>
        <Content>
          {namesCities.map((city) => (
            <City to={cities[city].slug} key={city}>
              <span>{cities[city].name}</span>
              <FaAngleRight />
            </City>
          ))}
        </Content>
      </Container>
    </Layout>
  );
};

export default IndexPage;
