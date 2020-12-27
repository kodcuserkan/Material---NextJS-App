import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const myLinks = [
    {
      as: "/",
      href: "/",
      name: "Home",
    },
    {
      as: "/notes",
      href: "/notes",
      name: "Notes Landing",
    },
    {
      as: "/hi",
      href: "/hi",
      name: "Hi page",
    },
    {
      as: "/notes/1",
      href: "/notes/1",
      name: "Note-1",
    },
    {
      as: "/notes/2",
      href: "/notes/2",
      name: "Note-2",
    },
    {
      as: "/about",
      href: "/about",
      name: "About us",
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 4rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: 'inherit',
      textDecoration: 'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             <header>
        <nav className={classes.nav}>
          {myLinks.map((l, i) => {
            return (
              <span key={i}>
                <Link as={l.as} href={l.href}>
                  <a className={classes.link}>{l.name}</a>
                </Link>
              </span>
            );
          })}
        </nav>
      </header>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
