import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      color: #24292e;
      text-transform: uppercase;
      margin-left: 10px;
      padding-top: 6px;

      p {
        margin: 0;
        font-size: 33px;
        font-weight: 300;
        line-height: 25px;
      }
      strong {
        font-size: 45px;
        font-weight: 700;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;

    color: #777;
    font-size: 14px;
    font-weight: 100;

    svg {
      padding-right: 3px;
    }
  }

  ${media.lessThan('large')`
    margin-bottom: 0;
    header {
      .gatsby-image-wrapper {
        width: 118px!important;
        height: 87px!important;
      }
      div {
        padding-top: 5px;
        margin-left: 5px;
        p {
          margin: 0;
          padding: 0;
          font-size: 18px;
          line-height: 12px;
        }
        strong {
          font-size: 22px;
        }
      }
    }
    > span {
      font-size: 11px;
      svg {
        padding-right: 4px;
      }
    }
  `}
`;

export const ContainerShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin: 6px 0 4px;
    font-size: 12px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;

    ${media.lessThan('medium')`
      display: grid;
      grid-column-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      margin: 5px 0 0;

      span {
        display: none;
      }
    `}

  }
`;

export const ButtonShare = styled.div`
  & + div {
    margin-left: 10px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.color}!important;
    color: #FFF!important;
    font-size: 13px!important;
    font-weight: 100!important;
    padding: 3px 10px!important;
    outline: none!important;
    border-radius: 4px;

    svg {
      width: 15px;
      height: 15px;
      margin-right: 3px;
    }
  }

  ${media.lessThan('medium')`
    flex: 1;

    button {
      justify-items: center;
      width: 100%;
    }
    & + div {
      margin-left: 0;
    }
  `}
`;
