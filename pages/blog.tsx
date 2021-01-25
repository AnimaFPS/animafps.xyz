import { Container, ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Slider from "../components/Slider"
import Theme from "../lib/theme"

export default function blog():JSX.Element {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <Navbar url="/blog"/>
      <Container maxWidth="lg">
        <ThemeProvider theme={Theme}>
          <Slider/>
        </ThemeProvider>
      </Container>
      <Footer sticky={true}/>
    </>
  );
}
