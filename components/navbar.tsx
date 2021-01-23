import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NextLink from "next/link";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../lib/theme";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem } from "@material-ui/core";

interface IProps {
  path?: string;
}

interface IState {
  top?: boolean;
}

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `FOV Convert`, path: `/fov-convert` },
  { title: `FPSMath bot`, path: `/fpsmath` },
  { title: `Diabotical Team Rankings`, path: `/dbt-glicko` },
  { title: `Aim Resources`, path: `/aim-resources` },
  { title: `Blog & Articles`, path: `/blog` },
];
export class Navbar extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      top: false,
    };
  }

  toggleDrawer = () => {
    this.setState({ top: !this.state.top });
  };

  checkPageLink = (title: string, path: string) => {
    if (path === this.props.path) {
      return (
        <NextLink href={path} key={title}>
          <Link
            component="button"
            variant="button"
            style={{ marginRight: "10px" }}
            className="text-success"
          >
            {title}
          </Link>
        </NextLink>
      );
    } else {
      return (
        <NextLink href={path} key={title}>
          <Link
            component="button"
            variant="button"
            style={{ marginRight: "10px" }}
            color="inherit"
            className="link"
          >
            {title}
          </Link>
        </NextLink>
      );
    }
  };

  render() {
    return (
      <>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary" elevation={0}>
            <Toolbar style={{ flexWrap: "wrap" }}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                style={{ flexGrow: 1 }}
              >
                AnimaFPS
              </Typography>
              <Hidden smDown>
                <nav>
                  {navLinks.map(({ title, path }) =>
                    this.checkPageLink(title, path)
                  )}
                </nav>
              </Hidden>
              <Hidden mdUp>
                <IconButton onClick={this.toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={this.state.top}
                  onClose={this.toggleDrawer}
                >
                  <div style={{ width: "auto" }} className="bg-primary">
                    <List>
                      {navLinks.map(({ title, path }) => (
                        <NextLink href={path} key={title}>
                          <ListItem button className="link">
                            {title}
                          </ListItem>
                        </NextLink>
                      ))}
                    </List>
                  </div>
                </Drawer>
              </Hidden>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </>
    );
  }
}
export default Navbar;
