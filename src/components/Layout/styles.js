import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  ${media.lessThan('large')`
    padding: 5px;
  `}
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  height: 1000px;
  margin: 0 auto;
  padding: 10px 0;
  ${media.lessThan('large')`
    padding: 0;
  `}
  background: blue;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto;
  padding: 0;

  span {
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.primary};

    a {
      font-weight: 400;
      text-decoration: none;
      color: ${({ theme }) => theme.primary};
    }
  }

  svg {
    color: ${({ theme }) => theme.secondary};
    margin-left: 4px;
    width: 14px;
    height: 14px;
  }

  ${media.lessThan('large')`
    padding: 10px 0;
  `}
`;
