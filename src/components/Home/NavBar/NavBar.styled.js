import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6vh;

  position: fixed;
  z-index: 10;

  background: #3f51b5;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & > img {
    height: 2rem;
    margin-right: 2rem;

    &:hover {
      cursor: pointer;
    }
    &.menu {
      display: none;
      margin-left: 2rem;

      @media (max-width: 768px) {
        display: block;

        margin-left: 2rem;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 1.5rem;

      &:hover {
        cursor: pointer;
      }
    }

    .theme {
      margin-right: 2rem;
    }

    .logout {
      margin-right: 2rem;
      padding: 0.3rem 0;
    }
  }
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 2rem;
    margin-left: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;

    color: #fff;

    margin-left: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;

      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    margin-right: 1.5rem;
  }
`;
