import Head from 'next/head'
import Navbar from '../components/navbar'
import Theme from '../lib/theme'
import Footer from '../components/footer'

export default function blog() {
  return (
    <>
        <Head>
          <title>blog</title>
        </Head>
        <Navbar />
        <Footer />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </>
  )
}