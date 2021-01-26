import { Button, Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";

export default function links(): JSX.Element {
  return (
    <>
      <Head>
        <title>AnimaFPS - Links</title>
      </Head>
      <div
        style={{
          backgroundImage: "url(https://source.unsplash.com/collection/1368747)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            style={{
              paddingTop: "15%",
            }}
            spacing={3}
          >
            <Typography component="h1" variant="h3" align="center" gutterBottom>
              AnimaFPS
            </Typography>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                href="https://animafps.xyz"
                size="large"
                fullWidth={true}
              >
                Website
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                href="https://bit.ly/3fkVhUW"
                size="large"
                fullWidth={true}
              >
                Twitter
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://twitch.tv/animafps"
                size="large"
                fullWidth={true}
              >
                Twitch
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.youtube.com/channel/UCmnrZWLho7Vea1OEvNLO7_Q?sub_confirmation=1"
                size="large"
                fullWidth={true}
              >
                Youtube
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://liquipedia.net/arenafps/Anima"
                size="large"
                fullWidth={true}
              >
                Personal Liquipedia Page
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://discord.gg/xJdQxps"
                size="large"
                fullWidth={true}
              >
                Discord Server
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://www.instagram.com/animafps/"
                size="large"
                fullWidth={true}
              >
                Instagram
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://reddit.com/u/animafn"
                size="large"
                fullWidth={true}
              >
                Reddit
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href="https://docs.google.com/document/d/1yomXdR8kx6bSdI5yo2FSoYgSeZyQ69ymw1ERVnkH_Gg/edit?usp=sharing"
                size="large"
                fullWidth={true}
              >
                Aiming Documents and Resource Collection
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
