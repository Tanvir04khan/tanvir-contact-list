import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  width: 100vh;
  height: 100vh;

  margin: auto;

  background: rgba(0, 0, 0, 0);

  color: ${(props) => props.theme.text};

  .form {
    z-index: 10;
  }

  h1 {
    padding: 1rem;

    border-radius: 10px 10px 0 0;

    font-size: 2rem;

    background: ${(props) => props.theme.background};

    text-align: center;

    @media (max-width: 425px) {
      width: 100vw;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.3rem;

    border-radius: 0 0 10px 10px;

    background: ${(props) => props.theme.background};

    padding: 2rem;

    button {
      margin: 0.5rem;

      border: none;
      border-radius: 5px;

      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);

      font-weight: 500;

      min-width: 88px;

      padding: 0.4rem 1rem;

      cursor: pointer;

      &:first-child {
        background: #ababb5;
      }

      &:last-child {
        background: #7184f0;
      }
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100vw;
    height: 100vh;

    opacity: 0.3;

    background: #000;

    @media (max-width: 425px) {
      width: 100vw;
      height: 100vh;
    }
  }

  @media (max-width: 425px) {
    width: 100vw;
    height: 100vh;
  }
`;
