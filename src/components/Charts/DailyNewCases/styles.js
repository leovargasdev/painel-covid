import styled from 'styled-components';
import media from 'styled-media-query';

export const Content = styled.div`
  width: auto;
  height: 240px;
  ${media.lessThan('large')`
    height: 200px;
  `};
`;
