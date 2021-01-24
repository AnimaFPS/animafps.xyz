import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function aboutMe():JSX.Element {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar url="/about-me" />
      <Footer />
    </>
  );
}
