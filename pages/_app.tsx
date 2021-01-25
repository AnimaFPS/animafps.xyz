import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { AppProps } from "next/app";
import "normalize.css";
import "../styles/bootstrap.min.css";
import "../styles/nprogress.css";
import "../styles/linkhover.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          integrity="sha384-1l4KI/+00FE4A8k5/jea0GWaPvdV49ggBzQKj3AN8AtbzQTgAgb9jz8hE3v52YfG"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "5794384393f24cc8ac62abdc1bd942ba"}'
        ></script>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
