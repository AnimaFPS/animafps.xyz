import Head from 'next/head'
import { FovConvertForm } from '../lib/fov-convert'
import Navbar from '../components/navbar'
import { Container, ThemeProvider, CssBaseline, Typography } from '@material-ui/core'
import Footer from '../lib/footer'
import darkTheme from '../lib/theme'

export default function FovConvert() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Head>
          <title>FOV and Focal Length Scaling Converter/ Calculator</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
          <meta name="description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@AnimaFPS"/>
          <meta name="twitter:title" content="FOV and Focal Length Scaling Converter/ Calculator"/>
          <meta name="twitter:description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>
          <meta name="twitter:creator" content="@AnimaFPS"/>
          <meta name="twitter:image" content="http://animafps.vercel.app/images/fov-convert.png"/>

          <meta property="og:title" content="FOV and Focal Length Scaling Converter/ Calculator"/>
          <meta property="og:type" content="article"/>
          <meta property="og:url" content="http://animafps.vercel.app/fov-convert/"/>
          <meta property="og:image" content="http://animafps.vercel.app/images/fov-convert.png"/>
          <meta property="og:description" content="A Calculator to convert different fov values to others per the fov aspect ratio"/>
          <meta property="og:site_name" content="Anima's Stuff"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Navbar />
        <Container>
          <br/>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            FOV and Focal Length Scaling Converter/ Calculator
          </Typography>
          <br/>
          <h2>FOV Conversion</h2>
          <FovConvertForm/>
          <p>Here is a fov converter if you want the same equivalent fov in different games or fov types/ratios or just find the true fov, if you don't know the fov of your game use this tool to find it: <a href = "https://www.desmos.com/calculator/3e9hs7usyr">https://www.desmos.com/calculator/3e9hs7usyr</a></p>
          <h4>The Math Behind</h4>
          Field of View Conversion:<br/>
          <code>
            Output FOV = atan(((Output FOV Ratio)/(Input FOV Ratio)) * tan(oldFOV * PI/360)) * 360/PI
            when using radians if using degrees then change * 360/pi to * 180
          </code>
          <hr/>
          <h2>Focal Length Scaling</h2>
        </Container>
        <br/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}