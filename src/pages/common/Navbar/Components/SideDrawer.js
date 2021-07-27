import React from "react";
import classes2 from "../Navbar.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const buyButton = (
    <Button className={classes2.buyButton} variant="outlined">
      BUY INFINITY
    </Button>
  );
  const list = (anchor) => (
    <div
      className={clsx(classes.list, classes2.sideDrawer, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classes2.buyButtonDiv2}>{buyButton}</div>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Presale"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Tokenomics"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Roadmap"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Whitepaper"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="delete">
            <GiHamburgerMenu />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
