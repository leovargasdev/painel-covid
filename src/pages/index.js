import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaAngleRight, FaSearch } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

import Layout from '~/components/Layout';
import listCities from '../../cities';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 10px 0 20px;
  font-family: 'Palanquin Dark', sans-serif;

  ${media.lessThan('large')`
    font-size: 30px;
  `};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin-bottom: 10px;

  background: ${({ theme }) => theme.box};
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.secondary};
    margin-right: 20px;
  }

  input {
    flex: 1;
    border: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    background: transparent;

    ::placeholder {
      color: ${({ theme }) => theme.secondary};
    }
  }

  ${(props) => props.isFocus
    && css`
      color: ${({ theme }) => theme.primary};
      border-color: ${({ theme }) => theme.purple};

      svg {
        color: ${({ theme }) => theme.purple};
      }
  `}

  ${media.lessThan('large')`
    width: 95%;
    padding: 12px;

    input {font-size: 14px;}
    svg {
      width: 16px;
      height: 16px;
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
    transform: translateX(5px);
    -webkit-box-shadow: 5px 4px 10px 0px rgba(255,255,255,0.15);
    box-shadow: 5px 4px 10px 0px rgba(255,255,255,0.15);
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
  const originalCities = Object.keys(listCities).sort();
  const [cities, setCities] = useState(originalCities);
  const [focusInput, setFocusInput] = useState(false);
  const [citySearch, setCitySearch] = useState('');

  useEffect(() => {
    const resultSearch = originalCities.filter((city) => city.includes(citySearch));
    setCities(resultSearch);
  }, [citySearch]);

  return (
    <Layout route="/" city="Painel" contact={false}>
      <Container>
        <Title>Painel do Coronavírus</Title>

        <InputContainer isFocus={focusInput}>
          <FaSearch />
          <input
            name="citySearch"
            placeholder="Digite o nome da cidade"
            onChange={(e) => setCitySearch(e.target.value.toLowerCase())}
            onFocus={() => setFocusInput(true)}
            onBlur={() => setFocusInput(false)}
          />
        </InputContainer>
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
