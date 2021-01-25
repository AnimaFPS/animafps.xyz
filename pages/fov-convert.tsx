import Head from "next/head";
import { FovConvertForm, FocalLengthForm } from "../components/fov-convert";
import Navbar from "../components/navbar";
import { ThemeProvider, Typography, Container } from "@material-ui/core";
import Footer from "../components/footer";
import darkTheme from "../lib/theme";

export default function FovConvert(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>FOV and Focal Length Scaling Converter/ Calculator</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content="A Calculator to convert different fov values to others per the fov aspect ratio"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AnimaFPS" />
          <meta
            name="twitter:title"
            content="FOV and Focal Length Scaling Converter/ Calculator"
          />
          <meta
            name="twitter:description"
            content="A Calculator to convert different fov values to others per the fov aspect ratio"
          />
          <meta name="twitter:creator" content="@AnimaFPS" />
          <meta
            name="twitter:image"
            content="http://animafps.vercel.app/images/fov-convert.png"
          />

          <meta
            property="og:title"
            content="FOV and Focal Length Scaling Converter/ Calculator"
          />
          <meta content="website" property="og:type" />
          <meta
            property="og:url"
            content="http://animafps.vercel.app/fov-convert/"
          />
          <meta
            property="og:image"
            content="http://animafps.vercel.app/images/fov-convert.png"
          />
          <meta
            property="og:description"
            content="A Calculator to convert different fov values to others per the fov aspect ratio"
          />
          <meta property="og:site_name" content="Anima's Stuff" />
        </Head>
        <Navbar url="/fov-convert" />
        <Container
          className="shadow-sm"
          style={{
            paddingBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <br />
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            FOV and Focal Length Scaling Converter/ Calculator
          </Typography>
          <h2>FOV Conversion</h2>
          <FovConvertForm />
          <p>
            Here is a fov converter if you want the same equivalent fov in
            different games or fov types/ratios or just find the true fov, if
            you don't know the fov of your game use this tool to find it:{" "}
            <a href="https://www.desmos.com/calculator/3e9hs7usyr">
              https://www.desmos.com/calculator/3e9hs7usyr
            </a>
          </p>
          <h3>The Math Behind</h3>
          Field of View Conversion:
          <br />
          <code>
            Output FOV = atan(((Output FOV Ratio)/(Input FOV Ratio)) *
            tan(oldFOV * PI/360)) * 360/PI when using radians if using degrees
            then change * 360/pi to * 180
          </code>
          <hr />
          <h2>Focal Length Scaling</h2>
          <FocalLengthForm />
        </Container>
        <br />
        <Footer />
      </ThemeProvider>
    </>
  );
}
