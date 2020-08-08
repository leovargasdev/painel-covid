import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 15px;
  margin-top: 20px;

  h3, h4{
    font-weight: bold;
    margin: 0;
    margin-bottom: 9px;
  }

  h3{font-size: 25px;}
  h4{font-size: 18px;}

  span {
    margin-top: 8px;
    font-size: 13px;
    color: #777;
    font-weight: 100;
    text-align: center;
  }

  ${media.lessThan('large')`
    padding: 10px 5px;
    margin-top: 8px;
    h3, h4{
      text-align: center;
      font-size: 15px;
      margin: 0;
    }
    span {
      margin-top: 5px;
      font-size: 11px;
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

export const RangeDays = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px 0 0;
  padding-right: 30px;

  span {
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    padding: 0;
  }

  > span {
    width: 200px;
  }

  ${media.lessThan('large')`
    margin: 18px 0 5px;
    span {
      font-size: 11px;
    }
    > span {
      width: 200px;
    }
    .input-range__label {
      bottom: -10px;
    }
    .input-range__label--value span {
      bottom: -5px;
    }
  `};
`;
