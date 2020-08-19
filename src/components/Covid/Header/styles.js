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

    .gatsby-image-wrapper {
      width: 200px;
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;

    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 300;

    svg {
      padding-right: 3px;
    }
  }

  ${media.lessThan('large')`
    margin-bottom: 0;
    header .gatsby-image-wrapper {
      width: 100px;
    }
    > span {
      font-size: 11px;
      svg {
        padding-right: 4px;
      }
    }
  `}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  margin-top: 15px; /* Compensar as bordas da imagem, e alinhar os dois horizontalmente */
  margin-left: 10px;

  p {
    margin: 0;
    font-size: 38px;
    font-weight: 400;
    line-height: 25px;
  }
  strong {
    font-size: 50px;
    font-weight: 700;
  }

  ${media.lessThan('large')`
    margin-top: 10px;
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

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }

  ${media.lessThan('large')`
    div {
      display: grid;
      grid-column-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      margin: 5px 0 0;
    }

    > span {
      margin: 0;
      display: none;
    }
  `}
`;

export const ButtonShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background: ${(props) => props.color};
  border-radius: 4px;

  & + div {
    margin-left: 10px;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 3px;
  }

  ${media.lessThan('medium')`
    flex: 1;
    & + div {
      margin-left: 0;
    }
    padding: 2px 4px;
    button {
      font-size: 12px!important;
    }
  `}
`;
