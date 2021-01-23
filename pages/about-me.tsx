import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function aboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar path="/about-me" />
      <Footer />
    </>
  );
}
