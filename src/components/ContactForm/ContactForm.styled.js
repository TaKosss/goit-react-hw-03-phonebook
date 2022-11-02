import styled from 'styled-components';
import {Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
display: flex;
flex-direction: column;`

export const Input = styled(Field)`
  outline: none;
  margin-top: 5px;
  padding: 5px 0 5px 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  &:hover,
  &:focus {
    border-color: rgb(75,0,130);
  }`

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px`

export const Alert = styled(ErrorMessage)`
margin-top: 5px;
color: rgb(199,21,133)`

export const Button = styled.button`
margin-top: 10px;
padding: 5px 0 5px 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  &:hover,
  &:focus {
    border-color: rgb(75,0,130);`

