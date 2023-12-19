import { StyledButton } from './style';

const Button = ({
  children,
  width,
  height,
  backgroundcolor,
  fontSize,
  color,
  borderradius,
  margintop,
  onClick,
  disabled,
  fontWeight,
  type,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundcolor={backgroundcolor}
      fontSize={fontSize}
      color={color}
      borderradius={borderradius}
      margintop={margintop}
      onClick={onClick}
      disabled={disabled}
      fontWeight={fontWeight}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
