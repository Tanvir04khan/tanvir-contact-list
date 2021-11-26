import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: auto;

  background: ${(props) => props.theme.background};

  color: ${(props) => props.theme.text};

  width: 20rem;
  height: 20rem;

  border-radius: 15px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem;
    }
    padding: 0.3rem;
  }

  img {
    width: 5rem;
  }
  @media (max-width: 320px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;

  background: #cecece;

  border: none;
  border-radius: 5px;

  font-size: 1.2rem;
  font-weight: 500;

  cursor: pointer;

  transition: 275ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    transform: translateY(-1.5%);
  }

  img {
    width: 3rem;
    padding-right: 1rem;
  }
`;
