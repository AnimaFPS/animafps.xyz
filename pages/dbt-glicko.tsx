import { Container, Typography } from "@material-ui/core";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getRankingData, getPlayerData } from "../lib/glicko";
import { Table } from "react-bootstrap";

export async function getStaticProps(): Promise<{
  props: {
    rankingData: {
      name: string;
      rating: number;
      rd: number;
      played: number;
    }[];
    playerData: {
      name: string;
      rating: number;
      rd: number;
    }[];
  };
}> {
  const rankingData = getRankingData();
  const playerData = getPlayerData();
  return {
    props: {
      rankingData,
      playerData,
    },
  };
}

export default function dbtGlicko({
  rankingData,
  playerData,
}: {
  rankingData: {
    name: string;
    rating: number;
    rd: number;
    played: number;
    active: boolean;
  }[];
  playerData: {
    name: string;
    rating: number;
    rd: number;
  }[];
}): JSX.Element {
  return (
    <>
      <NextSeo
        title="OCE DBT Team Rankings"
        description="Implementation of the Glicko2 rating system to rank the Oceania Diabotical competitive teams"
        canonical="https://animafps.xyz/dbt-glicko"
        openGraph={{
          images: [
            {
              url: "https://animafps.xyz/dbt-glicko.png",
            },
          ],
        }}
      />
      <Navbar url="/dbt-glicko" />
      <Container>
        <br />
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          OCE DBT Team Rankings
        </Typography>
        <h2>Teams</h2>
        <Table hover>
          <thead>
            <tr>
              <td>#</td>
              <td>Team Name</td>
              <td>Rating</td>
              <td>RD</td>
              <td>Played</td>
            </tr>
          </thead>
          <tbody>
            {rankingData.map(
              (
                i: {
                  name: string;
                  rating: number;
                  rd: number;
                  played: number;
                  active: boolean;
                },
                index: number
              ) => {
                if (i.active) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.rating.toFixed(0)}</td>
                      <td>{"±" + i.rd.toFixed(0)}</td>
                      <td>{i.played}</td>
                    </tr>
                  );
                }
              }
            )}
          </tbody>
        </Table>
        <h2>Players</h2>
        <Table hover>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Rating</td>
              <td>RD</td>
            </tr>
          </thead>
          <tbody>
            {playerData.map((i, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.rating.toFixed(0)}</td>
                  <td>{"±" + i.rd.toFixed(0)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
}
