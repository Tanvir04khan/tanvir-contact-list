import styled from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.body}; */

  width: 75%;

  margin: auto;
  padding-top: 4rem;

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
