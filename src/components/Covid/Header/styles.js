import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 300;

    svg {
      padding-right: 3px;
    }
  }

  ${media.lessThan('large')`
    margin-bottom: 0;
    > span {
      font-size: 11px;
      svg {
        margin-right: 4px;
      }
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;

    span {
      margin-right: 4px;
      width: 65px;
    }

    strong {
      font-family: 'Palanquin Dark', sans-serif;
      font-weight: 600;
      font-size: 80px;
      margin-left: 10px;
      padding: 0;
    }
  }

  p {
    margin: 4px 0 0 ;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
  }

  margin-bottom: 5px;

  ${media.lessThan('medium')`
    margin: 10px 0 2px;
    > div {
      span {
        width: 26px;
      }
      strong {
        font-size: 30px;
        margin-left: 5px;
        padding: 0;
      }
    }
    p {
      font-size: 14px;
    }
  `};
`;

export const ContainerShare = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

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
