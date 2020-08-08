import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #26547C;
  padding: 30px 0;
  margin-top: 20px;

  h1 {
    font-size: 28px;
    color: #fafaff;
    margin: 0 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 720px;
    width: 100%;

    label {
      color: #fafaff;
      span {
        margin-left: 2px;
        font-size: 14px;
        opacity: 0.8;
      }
    }

  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;

    padding: 12px 80px;
    margin: 0;
    background: transparent;
    color: #fafaff;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #fafaff;
    transition-duration: 0.6s;

    &:hover {
      background: #fafaff;
      color: #26547C;
      svg {
        color: #26547C;
      }
    }

    svg {
      padding-left: 2px;
      color: #fafaff;
    }
  }

  ${media.lessThan('large')`
    padding: 20px 0;
    h1 {
      text-align: center;
      font-size: 16px;
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
      label span {
        font-size: 12px;
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
  border: 1px solid #fafaff;
  color: #fafaff;
  transition-duration: 0.3s;

  input, textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fafaff;
    font-size: 20px;
    outline: 0;
    &::placeholder {
      color: #fafaff;
    }
  }

  ${(props) => props.isFocus
    && css`
      background: #fafaff;
      color: #26547C;
      border-color: #26547C;

      input, textarea {
        color: #26547C;
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
      font-size: 16px;
    }

    svg {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  `};
`;

export const BtnContri = styled(AniLink)`
  padding: 12px 80px;
  margin: 0 0 20px;
  background: transparent;
  color: #fafaff;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid #fafaff;
  transition-duration: 0.6s;

  &:hover {
    background: #fafaff;
    color: #26547C;
  }

  ${media.lessThan('large')`
    font-size: 14px;
    padding: 12px 60px;
  `};
`;
