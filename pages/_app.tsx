import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { color } from "~/components/styled/color";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0 !important;
          color: ${color.dark};
        }
        a {
          color: ${color.dark};
        }
        a:visited {
          color: inherit;
        }
      `}
    />
    <Component {...pageProps} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap"
      rel="stylesheet"
    />
  </>
);

export default App;
