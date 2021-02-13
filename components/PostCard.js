import React from "react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  makeStyles,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Link,
  CardActions,
  Divider,
} from "@material-ui/core";

const styles = makeStyles((muiBaseTheme) => ({
  grid: {
    marginTop: "20px",
    minHeight: "391px",
  },
  card: {
    minWidth: 0,
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "391px",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    minHeight: "10rem",
    position: "relative",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(2)}px 0`,
  },
  heading: {
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#3d5170",
    "&::hover": {
      color: "#2b394f",
    },
  },
  subheading: {
    fontFamily: ("Helvetica Neue", "Helvetica", "Arial", "sans-serif"),
    fontSize: "14px",
    lineHeight: 1.8,
  },
  avatar: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    bottom: -136,
    boxShadow: " 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5)",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing(),
    },
  },
  footer: {
    height: "30px",
  },
}));

export default function MediumCard(props) {
  const classes = styles();
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = props.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];

  return (
    <Grid item xs={12} sm={12} lg={4} className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.thumbnail}>
          <Avatar
            alt="Anima"
            className={classes.avatar}
            src={props.avatar}
            component="a"
            style={{
              display: "inline-block",
              alignItems: "center",
              marginLeft: "1.5625rem",
            }}
            varient="rounded"
            href={props.profilelink}
            target="_blank"
          />
        </CardMedia>
        <CardContent
          className={classes.content}
          style={{
            paddingTop: "2.1875rem",
            minHeight: "160px",
            paddingBottom: "0",
          }}
        >
          <Typography className={classes.heading} variant={"h5"} gutterBottom>
            <Link
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              {ShortenText(props.title, 0, 75)}
            </Link>
          </Typography>
          <Typography className={classes.subheading} variant="body1">
            {ShortenText(ToText(props.content), 0, 120) + "..."}
          </Typography>
        </CardContent>
        <Divider className={classes.divider} />
        <CardActions
          style={{ paddingLeft: "1.5625rem", paddingRight: "1.5625rem" }}
          className={classes.footer}
        >
          <Grid>
            <Typography
              display="block"
              variant="body1"
              style={{
                fontSize: "14px",
                color: "#868e96",
                display: "inline-block",
              }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} width="14px" /> {finalDate}
            </Typography>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
