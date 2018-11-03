import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TopBar } from "./TopBar";
import { NavDrawer } from "./NavDrawer";
import { Typography } from "@material-ui/core";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    if (this.drawerOpen) {
      this.setState({ drawerOpen: false });
    } else {
      this.setState({ drawerOpen: true });
    }
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopBar
          open={drawerOpen}
          onDrawerClicked={this.handleDrawerToggle}
          title={"Material-UI Admin"}
        />
        <NavDrawer open={drawerOpen} onClose={this.handleDrawerClose} />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <Typography>This is a test</Typography>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const Layout = withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
export { Layout };
