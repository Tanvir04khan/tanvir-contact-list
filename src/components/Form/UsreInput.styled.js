import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding-left: 3rem;

  background: ${(props) => props.theme.background};

  width: 25rem;
  height: 10vh;

  label {
    font-size: 1.3rem;
    padding: 0.2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    border: 1px solid #cecece;

    width: 18rem;
    height: 3.5vh;

    border-radius: 5px;

    background: #cccccc;
  }

  p {
    color: red;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;
