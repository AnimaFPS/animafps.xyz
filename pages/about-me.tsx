import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Typography from "@material-ui/core/Typography/Typography";

export default function aboutMe(): JSX.Element {
  return (
    <>
      <NextSeo
        title="About Me"
        canonical="https://animafps.xyz/about-me"
        openGraph={{
          type: "profile",
          profile: {
            username: "Anima",
            gender: "male",
          },
        }}
      />
      <Navbar url="/about-me" />
      <Typography align="center">Coming Soon</Typography>
      <Footer sticky={true} />
    </>
  );
}
