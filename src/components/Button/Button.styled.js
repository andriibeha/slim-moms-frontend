import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: grid;
  place-content: center;
  width: ${({ width }) => width || '210px'};
  height: ${({ height }) => height || '43px'};
  line-height: 17px;
  letter-spacing: 0.04em;
  font-weight: 700;
  border-radius: 30px;
  border: 2px solid #fc842d;
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ font }) => font || '14px'};
  background: ${({ bg }) => bg || '#FC842D'};
  box-shadow: 0px 4px 10px 0px #fc842d80;
  transition: all 250ms easy;
  cursor: pointer;

  &:hover,
  :focus {
    color: ${({ color }) => '#FC842D' || '#FFF'};
    background: ${({ bg }) => '#FFF' || '#FC842D'};
  }
`;
