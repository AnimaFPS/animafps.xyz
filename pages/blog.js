import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function blog() {
  return (
    <>
        <Head>
          <title>blog</title>
        </Head>
        <Navbar />
        <Footer />
    </>
  )
}