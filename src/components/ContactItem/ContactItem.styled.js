import styled from 'styled-components';

export const Item = styled.li`
 display: flex;
  justify-content: space-between;
  align-items: center;`

export const Button = styled.button`
margin: 10px 0px 10px 20px;
padding: 5px 7px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  &:hover,
  &:focus {
    border-color: rgb(75,0,130);`