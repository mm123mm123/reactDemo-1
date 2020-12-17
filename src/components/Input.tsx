import React from 'react';
import styled from 'styled-components';

const Label=styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`
type Props={
  name: string,
}& React.InputHTMLAttributes<HTMLInputElement>;
const Input=(props: Props)=>{
  const {name,children,...rest}=props
  return(
    <Label>
      <span>{name}</span>
      <input {...rest}/>
    </Label>
  )
}
export {Input};