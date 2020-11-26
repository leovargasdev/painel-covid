import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin-bottom: 10px;

  background: ${({ theme }) => theme.box};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.secondary};
    margin-right: 20px;
  }

  input {
    flex: 1;
    border: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    background: transparent;

    ::placeholder {
      color: ${({ theme }) => theme.secondary};
    }
  }

  ${(props) => props.isFocus
    && css`
      color: ${({ theme }) => theme.primary};
      border-color: ${({ theme }) => theme.orange};

      svg {
        color: ${({ theme }) => theme.orange};
      }
  `}

  ${media.lessThan('large')`
    width: 95%;
    padding: 12px;

    input {font-size: 14px;}
    svg {
      width: 16px;
      height: 16px;
    }
  `};
`;
