import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
  }

  aside {
    flex: 14;
    background: var(--background-black);
    clip-path: polygon(100% 0%, 92% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);
    width: 100%;
    height: 100%;
    color: #fff;
    gap: 7rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 12rem 8rem;

    @media (max-width: 1600px) {
      padding: 4rem 6rem;
    }

    @media (max-width: 1400px) {
      padding: 4rem 6rem;
      flex: 12;
    }

    @media (max-width: 1200px) {
      padding: 4rem 4rem;
      flex: 8;
    }

    @media (max-width: 768px) {
      padding: 4rem 2rem;
      gap: 5rem;

      clip-path: polygon(
        50% 0%,
        100% 0,
        100% 35%,
        100% 70%,
        100% 100%,
        50% 95%,
        0 100%,
        0% 70%,
        0% 35%,
        0 0
      );

      height: auto;
    }

    .firstImg {
      width: 35%;

      @media (max-width: 1024px) {
        width: 70%;
      }

      @media (max-width: 768px) {
        width: 30%;
      }

      @media (max-width: 500px) {
        width: 50%;
      }
    }

    .agenda {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      img {
        @media (max-width: 1800px) {
          width: 85%;
        }

        @media (max-width: 1024px) {
          width: 100%;
        }

        @media (max-width: 768px) {
          width: 80%;
        }

        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
  .modalActive:after {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;
    transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
  }

  main {
    flex: 8;
    padding: 0 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 2rem 2rem;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    text-align: center;

    @media (max-width: 750px) {
      height: 100%;
    }

    > img {
      align-self: center;
      padding-bottom: 2rem;

      @media (max-width: 768px) {
        padding-top: 2rem;
      }
    }
  }
`;

export const WhatsappButton = styled.button`
  width: 7rem;
  height: 7rem;

  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border: none;
  background: none;
  outline: none;

  img {
    width: 100%;
  }
  @media (max-width: 810px) {
    height: 5rem;
    right: 1rem;
    bottom: 2rem;
    img {
      width: 60%;
    }
  }
`;
