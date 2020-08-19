import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  display: flex;
  padding: 10px 0;
  ${media.lessThan('large')`
    flex-direction: column;

    div {
      & + div {
        padding-top: 10px;
        border-top: 1px solid rgba(255,255,255,0.5);
        margin: 10px 2px 0;
      }
    }
  `};
`;

export const Chart = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

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
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    text-align: center;

    strong {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }
  }

  ${media.lessThan('large')`
    span {
      margin-top: 6px;
      font-size: 13px;
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
