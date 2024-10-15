import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
`;
