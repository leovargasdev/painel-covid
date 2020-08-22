import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
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
    font-size: 14px;
    font-weight: 300;
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

  background: ${({ theme }) => theme.box};
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
