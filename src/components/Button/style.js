import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderradius};
  margin-top: ${(props) => props.margintop};
  font-weight: ${(props) => props.fontWeight};
`;
