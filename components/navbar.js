import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NextLink from 'next/link'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import darkTheme from '../lib/theme'

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
  }));

const navLinks = [
    { title: `home`, path: `/` },
    { title: `fov convert`, path: `/fov-convert` },
    { title: `FPSMath bot`, path: `/fpsmath` },
    { title: `Diabotical Team Rankings`, path: `/dbt-glicko` },
    { title: `Aim Resources`, path: `/aim-resources`},
    { title: `blog & articles`, path: `/blog` },
]

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
          <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar style={{flexWrap: 'wrap'}}>
                    <Typography variant="h6" color="inherit" noWrap style={{flexGrow: '1'}}>
                        AnimaFPS
                    </Typography>
                    <nav>
                        {navLinks.map(({ title, path }) => (
                          <NextLink href={path} key={title}>
                            <Link variant="button" color="inherit" style={{marginRight: "10px"}}>
                              {title}
                            </Link>
                          </NextLink>
                        ))}
                    </nav>
                </Toolbar>
            </AppBar>
          </ThemeProvider>
        </>
    )
}
export default Navbar