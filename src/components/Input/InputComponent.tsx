import {  StylesProps } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Colors, theme } from "styles/theme";
import {Box} from './../../components'


 type inputType= 'text' | 'email' | 'password' | 'date';

 interface InputStyles extends React.InputHTMLAttributes<HTMLInputElement>{
	margin?:string;
	fontSize?:string;
	fontWeight?:string;
	color?:Colors;
	textAlign?:string;
	textDecoration?:string;
	textTransform?:string;
  backgroundColor?:Colors;
  padding?:string;
}



interface InputComponentProps extends InputStyles{
  min?: number;
  max?: number;
  placeholder?: string;
  label?: string;
  errorMsg?: string; 
  onChange?: () => void;
  type?:inputType;
  
}

// React.InputHTMLAttributes<HTMLInputElement>
export const InputComponent: React.FC<InputComponentProps > = ({
  min,
  max,
  placeholder,
  label,
  type,
  errorMsg,
  onChange,
  ...rest
}) => {
  return (
    
    <Input
      min={min}
      max={max}
      placeholder={placeholder}
      label={label}
      type={type}
      errorMsg={errorMsg}
      onChange={onChange}
      {...rest}
    />
   
  );
};

const Input = styled(Box).attrs({ as: 'input' })<InputStyles>`

  padding: ${({ padding }) => padding || ""}; 
  border: ${({border})=> border? theme.borders.border:''};
  background-color: ${({backgroundColor})=> backgroundColor ? theme.colors : theme.colors.white};
  color: ${({color})=> color? theme.colors.black:''};
 
`;
