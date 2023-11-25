import { styled } from 'styled-components';

export const Button = styled.button`
  display: block;
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 15px 0 5px 0;
  border: 1px solid #555;
  border-radius: 5px;
  box-shadow: 0px 2px 9px -4px rgba(0, 0, 0, 0.42);
  background-color: white;
  cursor: pointer;
  text-transform: capitalize;
  transition: border 250ms linear, background-color 250ms linear;

  &:hover {
    border: 1px solid #0088ff;
    background-color: #0088ff;
    color: white;
  }
`;
export const StyledDiv = styled.div`
  padding: 15px;
  width: 375px;
  box-shadow: 0px 2px 9px -4px rgba(0, 0, 0, 0.42);
  border-radius: 10px;

  & h3 {
    margin: 5px 0 5px 0px;
  }

  & input {
    width: 100%;
    height: 25px;
    border: 1px solid grey;
    border-radius: 5px;
  }
`;
