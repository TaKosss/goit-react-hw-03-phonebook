import styled from 'styled-components';

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
`

export const Input = styled.input`
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