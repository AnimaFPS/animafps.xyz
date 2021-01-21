import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from '../lib/navbar'
import Theme from '../lib/theme'


export default function blog() {
  return (
    <>  
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Head>
          <title>blog</title>
        </Head>
        <Navbar />
      </ThemeProvider>
    </>
  )
}