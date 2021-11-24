import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  position: fixed;
  z-index: 10;

  background: #3f51b5;
  opacity: 0.9;

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

  @media (max-width: 375px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  & img {
    height: 2rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;

    color: #fff;

    margin-left: 2rem;

    @media (max-width: 768px) {
      font-size: 1rem;

      margin-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    margin-right: 1.5rem;
  }
`;
