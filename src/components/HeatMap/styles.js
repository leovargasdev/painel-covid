import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  padding: 20px 0;
  margin-top: 20px;
  background: ${({ theme }) => theme.box};

  h3{
    padding-left: 20px;
    font-size: 25px;
    font-weight: bold;
    margin: 0;
  }

  ${media.lessThan('large')`
    padding: 10px 0;
    margin-top: 8px;
    h3 {
      padding: 0px;
      text-align: center;
      font-size: 16px;
    }
  `};
`;

export const ContainerMap = styled.div`
  display: flex;
  height: 500px;
  margin-top: 7px;
  .map,
  .map-base {
    height: 100%;
  }

  .map {
    position: relative;
    &, .map-base {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: $blue-grey-50;
    }
  }
  .info {
    margin-top: 20px;
    color: #FFF;
    background: rgba(0,0,0,0.8);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;

    p {
      text-align: center;
      margin: 0;
      line-height: 13px;
    }

    span {
      margin: 0;
      color: #dedede;
    }
  }

  .legend {
    line-height: 18px;
    color: #dedede;
  }
  .legend i {
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 8px;
    opacity: 0.7;
  }

  ${media.lessThan('large')`
    height: 370px;
    margin-top: 8px;
    .legend {
      line-height: 14px;
      font-size: 14px;
    }

    .legend i {
      width: 14px;
      height: 14px;
    }
  `};
`;

export const Notas = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0;

  h6 {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    background: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.primary};
    padding: 4px 0;
    margin: 0;
  }

  ul {
    list-style: decimal;
    border: 1px solid ${({ theme }) => theme.gray};
    border-top: 0;
    padding: 4px 30px;
    margin: 0;
  }

  li {
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    a{
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }
  }

  ${media.lessThan('large')`
    margin: 8px 5px 0;
    h6 {
      font-size: 14px;
    }
    ul {
      padding: 4px 24px;
    }
    li {
      font-size: 11px;
      line-height: 13px;
    }
  `};
`;
