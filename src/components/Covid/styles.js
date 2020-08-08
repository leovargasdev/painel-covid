import styled, {} from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1040px;
`;

export const ChartsInRow = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;
