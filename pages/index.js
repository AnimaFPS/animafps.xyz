import Head from 'next/head'
import Image from 'next/image'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import darkTheme from '../lib/theme'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Navbar from '../lib/navbar'
import Footer from '../lib/footer'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#303030',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    color: '#00bc8c'
  }
}));

export default function Home() {
  const classes = useStyles()
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
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
        <div className={classes.heroContent}>
          <Container maxWidth="md" >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Anima's Stuff/ Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Just all the stuff that I make and create that exist on this website as well as other cool things
            </Typography>
            <div className={classes.heroButtons}>
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
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
                <Card className={classes.card}>
                  <Link href="/fpsmath">
                    <Image
                      src="/images/fpsmath.png"
                      alt="fpsmath"
                      width={1280}
                      height={640}
                      sizes="20vw"
                      layout="responsive"
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Link href="/fpsmath">
                      <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
                        FPSMath Discord Bot
                      </Typography>
                    </Link>
                    <Typography>
                      A Discord bot designed to convert sensitivities, fovs, mouse feel across themselves and preset games
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Card className={classes.card}>
                  <Link href="/fov-convert">
                    <Image
                      src="/images/fov-convert.png"
                      alt="fov-convert"
                      width={1246}
                      height={878}
                      sizes="20vw"
                      layout="responsive"
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Link href="/fov-convert">
                      <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
                      FOV and Focal Length Scaling Converter/ Calculator
                      </Typography>
                    </Link>
                    <Typography>
                      A Discord bot designed to convert sensitivities, fovs, mouse feel across themselves and preset games
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
        <Footer/>
    </ThemeProvider>
    </>
  )
}
