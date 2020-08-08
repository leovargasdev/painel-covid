import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  ${media.lessThan('large')`
    margin: 0;
    flex-direction: column;
    height: auto;
  `}
`;

export const Chart = styled.div`
  display: flex;
  width: 100%;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${media.lessThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    height: auto;
    margin-top: 8px;
  `}
`;

export const ItemPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #fafaff;
  padding: 10px 30px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition-duration: 1s;

  svg {
    width: 60px;
    height: 60px;
    color: ${(props) => props.color};
    padding-right: 10px;

    ${(props) => props.case === 'Suspeitos'
      && css`
        width: 72px;
        height: 72px;
      `};
  }

  div {
    display: flex;
    flex-direction: column;
    font-family: 'Source Sans Pro', sans-serif;
    strong {
      color: ${(props) => props.color};
      letter-spacing: 2px;
      font-weight: bold;
      margin: 0;
      font-size: 58px;
      line-height: 48px;
    }

    span {
      color: #777;
      letter-spacing: 3px;
      font-weight: 100;
      font-size: 15px;
      text-transform: uppercase;
      padding-left: 4px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateX(-15px);
    background: ${(props) => props.color};
    box-shadow: 0 0px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
    svg, strong, span {
      color: #FFF;
    }
  }

  ${media.lessThan('large')`
    margin: 2px 0;
    padding: 5px 25px;
    svg {
      width: 35px;
      height: 35px;
      padding-right: 5px;

      ${(props) => props.case === 'Suspeitos'
        && css`
          width: 44px;
          height: 44px;
        `};
    }

    div {
      strong {
        letter-spacing: 1px;
        font-size: 34px;
        line-height: 28px;
      }

      span {
        letter-spacing: 2px;
        font-size: 12px;
        padding-left: 2px;
      }
    }

    &:hover {
      transform: translateY(2px);
    }
  `}
`;
