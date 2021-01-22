import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from '../components/navbar'
import Theme from '../lib/theme'


export default function blog() {
  return (
    <>  
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Head>
          <title>blog</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Navbar />
      </ThemeProvider>
    </>
  )
}