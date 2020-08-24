import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > a {
    display: flex;
    align-items: flex-end;
    margin: 10px auto 20px;

    font-size: 22px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.secondary};

    svg {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      color: ${({ theme }) => theme.secondary};
    }

    transition-duration: 0.6s;

    &:hover {
      color: ${({ theme }) => theme.primary};
      svg {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  ${media.lessThan('large')`
    padding: 5px 0;

    > a {
      margin-bottom: 10px;

      font-size: 18px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
    width: 20px;
    height: 20px;
  }

  ${media.lessThan('large')`
    margin: 10px auto;
    padding: 0;

    span {
      font-size: 11px;

      svg {
        margin-left: 6px;
        width: 14px;
        height: 14px;
      }
    }
  `}
`;
