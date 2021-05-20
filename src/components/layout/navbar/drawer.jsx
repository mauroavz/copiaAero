import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Typography, IconButton, Drawer } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  typography: {
    color: "black",
  },
  menuIcon: {
      marginLeft: 'auto',
  },
}));

const DrawerList = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Typography className={classes.typography}>Contact</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Typography className={classes.typography}>About</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Typography className={classes.typography}>Expertise</Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText>
              <Typography className={classes.typography}>Projects</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton className={classes.menuIcon} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerList;
