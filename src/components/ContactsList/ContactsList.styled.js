import { styled } from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  & li {
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
  & li:nth-child(even) {
    background-color: #f2f2f2;
  }
  & h4,
  p {
    margin: 0;
  }
  & button {
    padding: 0;
    border: none;

    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  .buttonsWrapper {
    display: flex;
    gap: 10px;
  }
  .favoriteBtn {
    cursor: pointer;
  }
`;
export const Button = styled.button`
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
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
