import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
