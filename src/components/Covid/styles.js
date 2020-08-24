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
