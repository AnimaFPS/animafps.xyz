import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function dbtGlicko():JSX.Element {
  return (
    <>
      <Head>
        <title>OCE DBT Team Rankings</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <meta name="description" content="Implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@AnimaFPS"/>
        <meta name="twitter:title" content="OCE Diabotical Team Rankings"/>
        <meta name="twitter:description" content="Implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams"/>
        <meta name="twitter:creator" content="@AnimaFPS"/>
        <meta name="twitter:image" content="https://animafps.xyz/dbt-glicko.png"/>
        <meta property="og:title" content="OCE DBT Team Rankings"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="https://animafps.xyz/dbt-glicko"/>
        <meta property="og:image" content="https://animafps.xyz/dbt-glicko.png"/>
        <meta property="og:description" content="Implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams"/>
        <meta property="og:site_name" content="Anima's Stuff"/>
      </Head>
      <Navbar url="/dbt-glicko" />
      <Container>
        <br/>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          OCE DBT Team Rankings
        </Typography>
        <Typography align="center">Coming Soon</Typography>
      </Container>
      <Footer sticky />
    </>
  );
}
