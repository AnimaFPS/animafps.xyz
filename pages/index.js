import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Jumbotron } from 'react-bootstrap'
import { ThemeProvider, Button, Card, CardContent, Typography, Grid, Container, CssBaseline } from '@material-ui/core'
import darkTheme from '../lib/theme'


export default function Home() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Anima's Stuff</title>
        <meta name="description" content="Homepage for Anima's website"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="@AnimaFPS" name="twitter:site"/>
        <meta content="Anima's Stuff" name="twitter:title"/>
        <meta content="Homepage for Anima's website" name="twitter:description"/>
        <meta content="@AnimaFPS" name="twitter:creator"/>
        <meta content="https://animafps.github.io/Screenshot.png" name="twitter:image"/>
        <meta content="Anima's Stuff" property="og:title"/>
        <meta content="article" property="og:type"/>
        <meta content="http://animafps.github.io" property="og:url"/>
        <meta content="https://animafps.github.io/Screenshot.png" property="og:image"/>
        <meta content="Homepage for Anima's website" property="og:description"/>
        <meta content="Anima's Stuff" property="og:site_name"/>
      </Head>
      <Navbar />
        <Jumbotron>
          <Container maxWidth="md" >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Anima's Stuff/ Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Just all the stuff that I make and create that exist on this website as well as other cool things
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href='/about-me'>
                    <Button variant="contained" color="primary">
                      About me
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Jumbotron>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
                <Card className="shadow-sm">
                  <Link href="/fpsmath">
                    <a>
                      <Image
                        src="/images/fpsmath.png"
                        alt="fpsmath"
                        width={1280}
                        height={640}
                        sizes="20vw"
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <CardContent>
                    <Link href="/fpsmath">
                      <a>
                        <Typography gutterBottom variant="h5" component="h2">
                          FPSMath Discord Bot
                        </Typography>
                      </a>
                    </Link>
                    <Typography>
                      A Discord bot designed to convert sensitivities, fovs, mouse feel across themselves and preset games
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Card>
                  <Link href="/fov-convert">
                    <a>
                      <Image
                        src="/images/fov-convert.png"
                        alt="fov-convert"
                        width={1246}
                        height={878}
                        sizes="20vw"
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <CardContent>
                    <Link href="/fov-convert">
                      <a>
                        <Typography gutterBottom variant="h5" component="h2">
                          FOV and Focal Length Scaling Converter/ Calculator
                        </Typography>
                      </a>
                    </Link>
                    <Typography>
                      A Discord bot designed to convert sensitivities, fovs, mouse feel across themselves and preset games
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <br/>
        <Footer/>
        </ThemeProvider>
    </>
  )
}
