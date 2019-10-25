import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Nav from "./Components/Nav/Nav";

function App(props) {
  return (
    <div className="App">
      <Nav location={props.location.pathname} />
      {routes}
    </div>
  );
}

export default withRouter(App);
