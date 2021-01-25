import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function aboutMe(): JSX.Element {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta property="og:type" content="profile" />
        <meta property="og:username" content="Anima" />
        <meta property="og:gender" content="male" />
      </Head>
      <Navbar url="/about-me" />
      <Footer sticky={true}/>
    </>
  );
}
