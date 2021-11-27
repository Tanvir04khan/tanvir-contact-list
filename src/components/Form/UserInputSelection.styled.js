import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 25rem;
  height: 2vh;

  background: ${(props) => props.theme.background};

  padding: 1rem 3rem;

  font-size: 1.3rem;

  p {
    font-size: 14px;
    color: red;
    padding-left: 1rem;
  }

  label {
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;

    text-align: center;
  }

  select {
    margin-left: 2rem;
    margin-bottom: 0.3rem;
    margin-top: 1.5rem;

    border-radius: 5px;

    background: #cecece;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }

  @media (max-width: 320px) {
    margin: 0;
  }
`;
