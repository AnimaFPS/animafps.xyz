import { Container, ThemeProvider } from "@material-ui/core";
import { NextSeo } from 'next-seo';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Slider from "../components/Slider"
import Theme from "../lib/theme"

export default function blog():JSX.Element {
  return (
    <>
      <NextSeo
          title="Blog"
          canonical="https://animafps.xyz/blog"
        />
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
