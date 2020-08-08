import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 20px;
  padding: 20px 0;

  h3{
    text-align: center;
    font-weight: bold;
    margin: 0;
    margin-bottom: 20px;
    font-size: 25px;
  }

  > span {
    margin-top: 14px;
    font-size: 14px;
    color: #444;
    font-weight: 100;
    text-align: center;
  }

  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 1s ease-in-out;

  ${media.lessThan('large')`
    margin: 10px 0 0;
    align-self: auto;
    padding: 10px 0;

    h3{
      font-size: 20px;
      margin-bottom: 10px;
    }
    > span {
      font-size: 13px;
    }
  `}

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('large')`
    flex-direction: column;

    div {
      & + div {
        padding-top: 10px;
        border-top: 1px solid rgba(0,0,0,0.1);
        margin: 10px 2px 0;
      }
    }
  `};
`;

export const ContainerCharts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p{
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 5px;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    line-height: 10px;
    color: #777;
    font-weight: 100;
    text-align: center;

    strong {
      color: #333;
      font-weight: 300;
    }
  }

  ${media.lessThan('large')`
    span {
      margin-top: 6px;
      font-size: 13px;
      /* line-height: 8px; */
    }
    p{
      text-align: center;
      font-size: 15px;
      margin: 0;
    }
    & + div {
      margin-top: 10px;
    }
  `}
`;
