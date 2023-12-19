import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
`;
