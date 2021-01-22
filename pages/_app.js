import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress';
import '../styles/bootstrap.min.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../styles/nprogress.css" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp