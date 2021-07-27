import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    padding: 2rem 2rem;
    border-radius: 1rem;
    background: #f0f2f5;
    box-shadow: 0 4px 10px rgba(92, 99, 105, 0.2);

    h2 {
      font-size: 2.2rem;
      color: #363f5f;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    input,
    select {
      width: 100%;
      padding: 0 1.5rem;
      height: 5.4rem;
      border-radius: 0.5rem;

      border: 1px solid #d7d7d7;
      background: #e7e9ee;

      font-weight: 400;
      font-size: 2rem;

      @media (max-width: 768px) {
        font-size: 1.6rem;
      }

      & + input,
      & + select {
        margin-top: 1.6rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 5rem;

      background: var(--background);
      color: #fff;

      border-radius: 0.25rem;
      border: 0;
      font-size: 1.6rem;
      margin-top: 1.5rem;
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

  .separator {
    font-size: 1.6rem;
    color: #333;

    margin: 2rem 0;
    display: flex;
    align-items: center;

    @media (max-width: 750px) {
      margin: 0.4rem;
    }

    &::before {
      content: "";
      flex: 1;
      height: 0.1rem;
      background: rgb(115 115 128);
      margin-right: 1.6rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: 0.1rem;
      background: rgb(115 115 128);
      margin-left: 1.6rem;
    }
  }

  button[type="button"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 5rem;
    background: var(--background);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.6rem;
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
`;

export const Modal = styled.div`
  width: 50rem;
  height: 50rem;
  position: absolute;
  background: white;
`;
