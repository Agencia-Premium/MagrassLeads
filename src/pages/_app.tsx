import GlobalStyle from "../styles/global";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
