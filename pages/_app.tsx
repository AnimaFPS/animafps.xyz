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
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="referrer" content="none-when-downgrade" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          integrity="sha384-1l4KI/+00FE4A8k5/jea0GWaPvdV49ggBzQKj3AN8AtbzQTgAgb9jz8hE3v52YfG"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7c5eafe470574c96b45657d10bcf5a2b"}'
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
