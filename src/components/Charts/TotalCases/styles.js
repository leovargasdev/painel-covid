import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  width: auto;
  height: 300px;
  ${media.lessThan('large')`
    height: 220px;
  `};
`;
