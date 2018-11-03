import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import { TopBar } from "./components/TopBar";
import { NavDrawer } from "./components/NavDrawer";
import { closeNavDrawer, openNavDrawer } from "./actions";
import { connect } from "react-redux";
import layoutReducer from "./reducer";

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

class Layout extends React.Component {
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
    const { classes, openNavDrawer, closeNavDrawer, layout } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopBar
          open={layout.isNavDrawerOpen}
          onDrawerClicked={openNavDrawer}
          title={"Material-UI Admin"}
        />
        <NavDrawer open={layout.isNavDrawerOpen} onClose={closeNavDrawer} />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <Typography>This is a test</Typography>
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    openNavDrawer: () => dispatch(openNavDrawer()),
    closeNavDrawer: () => dispatch(closeNavDrawer())
  };
}

function mapStateToProps(state) {
  return { layout: state.layout };
}

const reduxComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Layout));

const reduxCompWithStyles = withStyles(styles, { withTheme: true })(reduxComp);
export { reduxCompWithStyles as Layout, layoutReducer };
