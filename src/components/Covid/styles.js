import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  ${media.lessThan('large')`
    padding: 0 5px;
  `}
`;

export const ChartsInRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${media.lessThan('large')`
    flex-direction: column;

    div {
      width: 100%!important;
    }
  `}
`;
