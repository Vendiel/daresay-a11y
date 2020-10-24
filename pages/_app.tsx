import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/colors.css";
import "../styles/typography.css";
import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Nav } from "../components/general/Nav/Nav";
import { Footer } from "../components/general/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Daresay Accessibility Checklist</title>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
