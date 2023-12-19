import { StyledButton } from './style';

const Button = ({
  children,
  width,
  height,
  backgroundcolor,
  fontsize,
  color,
  borderradius,
  margintop,
  onClick,
  disabled,
  fontweight,
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      backgroundcolor={backgroundcolor}
      fontsize={fontsize}
      color={color}
      borderradius={borderradius}
      margintop={margintop}
      onClick={onClick}
      disabled={disabled}
      fontweight={fontweight}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
