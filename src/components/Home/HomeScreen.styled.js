import styled from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.body}; */

  width: 75%;

  margin: auto;
  padding-top: 5rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  place-items: center;

  @media (max-width: 1670px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1393px) {
    width: 65%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1191px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    width: 75%;
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 618px) {
    width: 100%;
    column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 425px) {
    width: 100%;
    column-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Wrapper = styled.section`
  position: relative;
  & > img {
    position: fixed;
    bottom: 3rem;
    right: 4rem;

    width: 4rem;

    cursor: pointer;

    border-radius: 50%;

    transition: 275ms ease-in-out;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);

      transform: translateY(-1.5%);
    }

    @media (max-width: 768px) {
      bottom: 1rem;
      right: 1rem;

      width: 3rem;
    }
  }

  h2 {
    padding-top: 10rem;
    padding-left: 35vw;

    font-size: 2rem;

    font-weight: 700;
  }
`;
