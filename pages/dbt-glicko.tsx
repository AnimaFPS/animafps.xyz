import { Container, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getRankingData } from '../lib/glicko'

export async function getStaticProps() {
  const allPostsData = getRankingData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function dbtGlicko({ allPostsData }):JSX.Element {
  return (
    <>
      <NextSeo
        title="OCE DBT Team Rankings"
        description="Implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams"
        canonical="https://animafps.xyz/dbt-glicko"
        openGraph={{
          images: [
            {
              url: 'https://animafps.xyz/dbt-glicko.png'
            }
          ]
        }}
      />
      <Navbar url="/dbt-glicko" />
      <Container>
        <br/>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          OCE DBT Team Rankings
        </Typography>
        <Typography align="center">Coming Soon</Typography>
        {allPostsData}
      </Container>
      <Footer sticky />
    </>
  );
}
