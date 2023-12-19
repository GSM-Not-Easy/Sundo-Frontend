import { StyledButton } from './style';

const Button = ({
  children,
  width,
  height,
  backgroundColor,
  fontSize,
  color,
  borderRadius,
  marginTop,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      color={color}
      borderRadius={borderRadius}
      marginTop={marginTop}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
