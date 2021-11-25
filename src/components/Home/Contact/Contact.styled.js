import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  width: 15rem;
  height: 18rem;

  background: ${(props) => props.theme.background};

  color: ${(props) => props.theme.text};

  padding: 0.5rem;

  font-weight: 700;

  border: 2px solid #eaeaea;

  border-radius: 8px;

  &:hover {
    box-shadow: 15px 28px 25px -18px rgb(0 0 0 / 20%);

    transition: all 235ms ease-in-out 0.1s;

    transform: translateY(1%);
  }

  & > img {
    width: 5rem;
  }

  .name {
    padding: 0.2rem;

    text-align: center;
  }

  .email {
    padding: 0.2rem;
  }
  .phone-number {
    padding: 0.2rem;
  }
  .status {
    padding: 0.2rem;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 0.3rem;
      margin-bottom: 0.7rem;

      width: 3rem;

      cursor: pointer;

      border: none;
    }

    .dlt-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 3rem;

      background: #cecece;

      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      img {
        width: 1.5rem;
      }
    }

    .edit-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #cecece;

      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      img {
        width: 1.5rem;
      }
    }
  }
`;
