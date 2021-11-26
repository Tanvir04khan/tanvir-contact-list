import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  color: #fff;

  position: fixed;
  z-index: 10;

  background: #3f51b5;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  .welcome {
    display: flex;
    align-items: center;

    padding-left: 2rem;

    span {
      font-size: 2rem;
      padding-left: 1.3rem;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 450px) {
      padding: 1rem 0 0;
    }
  }

  img {
    width: 2rem;

    cursor: pointer;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 2rem;

    img {
      width: 1.5rem;
    }

    .login {
      margin-right: 1.3rem;
      margin-left: 0.4rem;
    }

    @media (max-width: 450px) {
      margin: 1.5rem 0 0.5rem;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
