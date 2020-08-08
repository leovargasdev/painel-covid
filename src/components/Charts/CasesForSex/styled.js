import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3{
    text-align: center;
    font-weight: bold;
    margin: 0;
    margin-bottom: 15px;
    font-size: 25px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  /* height: 300px; */

  > div {
    width: 300px;
  }
`;

export const ContainerCharts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 40px 0;
  /* margin-top: 20px; */

  p{
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 9px;
  }


  ${media.lessThan('large')`
    padding: 10px 5px;
    margin-top: 8px;

    p{
      text-align: center;
      font-size: 15px;
      margin: 0;
    }
  `}

  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  transition: all 1s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
