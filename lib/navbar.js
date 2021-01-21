import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Theme from '../lib/theme'

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
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

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        AnimaFPS
                    </Typography>
                    <nav>
                        {navLinks.map(({ title, path }) => (
                            <Link variant="button" color="inherit" href={path} key={title} className={classes.link}>
                            {title}
                            </Link>
                        ))}
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header