import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.box};
  padding: 30px 0;
  margin-top: 10px;

  h1 {
    font-size: 28px;
    margin: 0 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 720px;
    width: 100%;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 300px;
      padding: 12px 0;
      margin: 0 auto;
      background: transparent;
      font-size: 18px;
      text-transform: uppercase;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.primary};
      transition-duration: 0.6s;

      &:hover {
        background: #FFF;
        color: ${({ theme }) => theme.box};
        svg {
          color: ${({ theme }) => theme.box};
        }
      }

      svg {
        margin-left: 4px;
      }
    }
  }


  ${media.lessThan('large')`
    padding: 10px 0;

    h1 {
      text-align: center;
      font-size: 14px;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
    }

    form {
      padding: 0 10px;

      button {
        font-size: 14px;
        margin-top: 5px;
        padding: 6px 60px;
      }
      label {
        font-size: 14px;
      }
    }
  `};
`;

export const ContainerInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 3px 0 15px;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  transition-duration: 0.3s;

  input, textarea {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 20px;
    outline: 0;
    &::placeholder {
      color: #FFF;
    }
  }

  ${(props) => props.isFocus
    && css`
      background: ${({ theme }) => theme.body};
      color: #fff;

      input, textarea {
        color: #fff;
      }
    `}

  svg {
    margin-right: 16px;
    width: 30px;
    height: 30px;
  }

  ${media.lessThan('large')`
    width: 100%;
    margin: 2px 0 10px;
    padding: 6px 8px;

    input, textarea {
      font-size: 14px;
    }

    svg {
      margin-right: 8px;
      width: 14px;
      height: 14px;
    }
  `};
`;

export const BtnContri = styled(AniLink)`
  padding: 12px 80px;
  margin: 0 0 20px;
  background: transparent;

  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  text-transform: uppercase;

  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  transition-duration: 0.6s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.gray};
  }

  ${media.lessThan('large')`
    font-size: 12px;
    padding: 12px 40px;
    margin-bottom: 10px;
  `};
`;
