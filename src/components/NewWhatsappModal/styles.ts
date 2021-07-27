import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 33rem;
  background: rgba(235, 229, 222, 1);

  position: fixed;
  top: 25%;
  left: 30%;
  border-radius: 1rem;

  @media (max-width: 2560px) {
    top: 30%;
    left: 103rem;
  }

  @media (max-width: 2000px) {
    top: 30%;
    left: 71rem;
  }

  @media (max-width: 1600px) {
    top: 30%;
    left: 51.8rem;
  }

  @media (max-width: 1024px) {
    top: 30%;
    left: 26.2rem;
  }

  @media (max-width: 768px) {
    top: 25%;
    left: 18.4rem;
    width: 40rem;
  }

  @media (max-width: 375px) {
    top: 25%;
    left: 3.5%;
    width: 35rem;
  }

  @media (max-width: 320px) {
    top: 25%;
    left: 1.5%;
    width: 31rem;
    height: 35rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    color: #fff;
    background: rgba(38, 92, 84, 1);

    border-top-left-radius: 0.9rem;
    border-top-right-radius: 0.9rem;

    h1 {
      font-size: 1.8rem;
    }

    button {
      background: transparent;
      border: 0;

      cursor: pointer;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 100%;
      padding: 2rem;
      border-radius: 1rem;

      input,
      select {
        width: 100%;
        padding: 0 1.5rem;
        height: 5.4rem;
        border-radius: 0.5rem;

        border: 1px solid #d7d7d7;
        background: #fff;

        font-weight: 400;
        font-size: 2rem;

        @media (max-width: 768px) {
          font-size: 1.6rem;
        }

        & + input,
        & + select {
          margin-top: 2rem;
        }
      }

      button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 5rem;

        background: rgba(83, 164, 81, 1);
        color: #fff;

        border-radius: 0.25rem;
        border: 0;
        font-size: 1.6rem;
        margin-top: 2rem;
        font-weight: 600;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        transition: filter 0.2s;

        @media (max-width: 768px) {
          font-size: 1.4rem;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
