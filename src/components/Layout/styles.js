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
  margin: 0 auto;
  padding: 10px 0;
  ${media.lessThan('large')`
    padding: 0;
  `}
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 0;

  span {
    font-size: 24px;
    font-weight: 300;
    color: ${({ theme }) => theme.secondaryText};
  }
  ${media.lessThan('large')`
    padding: 10px 0;
  `}
`;
