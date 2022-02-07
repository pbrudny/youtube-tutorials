import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://izdsrzcxwbao.usemoralis.com:2053/server"
      appId="PL3WgrwZOhrUqkjbsuW8T0HJab95Ep9llCKlVGXB"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
