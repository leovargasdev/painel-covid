import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lessThan('large')`
    padding: 5px 0;
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

export const ControllFooter = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;

  display: flex;
  align-items: stretch;

  a {
    margin-right: 6px;
  }

  a, button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 5px 6px;

    border: 1px solid transparent;
    background: ${({ theme }) => theme.box};
    border-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;

    transition: all ease 0.8s;

    color: rgba(255, 255, 255, 0.8);

    span {
      text-align: center;
      font-size: 18px;

      width: 0px;
      height: 18px;
      overflow-x: hidden;
      overflow-y: hidden;

      transition: width ease 0.8s;
    }

    &:hover {
      cursor: pointer;
      border-color: ${({ theme }) => theme.orange};

      span{
        width: 130px;

        display: inline;
        visibility: visible;
      }
    }
  }
`;
