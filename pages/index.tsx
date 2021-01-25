import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Jumbotron } from "react-bootstrap";
import {
  ThemeProvider,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import darkTheme from "../lib/theme";

export default function Home(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Anima's Stuff</title>
          <meta name="description" content="Cool Things for FPS's and Random projects" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="@AnimaFPS" name="twitter:site" />
          <meta content="Anima's Stuff" name="twitter:title" />
          <meta
            content="Cool Things for FPS's and Random projects"
            name="twitter:description"
          />
          <meta content="@AnimaFPS" name="twitter:creator" />
          <meta
            content="https://animafps.vercel.app/Index.png"
            name="twitter:image"
          />
          <meta content="Anima's Stuff" property="og:title" />
          <meta content="website" property="og:type" />
          <meta content="http://animafps.vercel.app" property="og:url" />
          <meta
            content="https://animafps.vercel.app/Index.png"
            property="og:image"
          />
          <meta
            content="Cool Things for FPS's and Random projects"
            property="og:description"
          />
          <meta content="Anima's Stuff" property="og:site_name" />
          <link rel="canonical" href="http://animafps.vercel.app" />
          
        </Head>
        <Navbar url="/" />
        <Jumbotron>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Anima's Stuff/ Projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Just all the stuff that I make and create that exist on this
              website as well as other cool things
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="/about-me">
                    <Button variant="contained" color="primary">
                      About me
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Jumbotron>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                    A Discord bot designed to convert sensitivities, fovs, mouse
                    feel across themselves and preset games
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link href="/fov-convert">
                  <a>
                    <Image
                      src="/images/fov-convert.png"
                      alt="fov-convert"
                      width={1779}
                      height={890}
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
                    A Discord bot designed to convert sensitivities, fovs, mouse
                    feel across themselves and preset games
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link href="/dbt-glicko">
                  <a>
                    <Image
                      src="/images/dbt-glicko.png"
                      alt="dbt-glicko"
                      width={1333}
                      height={884}
                      sizes="20vw"
                      layout="responsive"
                    />
                  </a>
                </Link>
                <CardContent>
                  <Link href="/dbt-glicko">
                    <a>
                      <Typography gutterBottom variant="h5" component="h2">
                        OCE Diabotical Team Rankings
                      </Typography>
                    </a>
                  </Link>
                  <Typography>
                    An implementation of the Glicko2 rating system to rank the
                    Oceania Diabotical competitive teams
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link href="/aim-resources">
                  <a>
                    <Image
                      src="/images/aim-resources.png"
                      alt="aim-resources"
                      width={1797}
                      height={898}
                      sizes="20vw"
                      layout="responsive"
                    />
                  </a>
                </Link>
                <CardContent>
                  <Link href="/aim-resources">
                    <a>
                      <Typography gutterBottom variant="h5" component="h2">
                        Aggregated Aiming Resources
                      </Typography>
                    </a>
                  </Link>
                  <Typography>
                    Big aggregated sheet of every Aiming Resource ever made
                    including guides general and specific routines, videos and
                    more
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <br />
        <Footer />
      </ThemeProvider>
    </>
  );
}
