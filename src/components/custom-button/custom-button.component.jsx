import { CustomButtonContainer } from './custom-button.styles';
const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer
      {...props}
      className={`${props.className} custom-button`}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
