import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Nav from "./Components/Nav/Nav";
import { Provider } from "react-redux";
import store from "./ducks/store";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav location={props.location.pathname} />
        {routes}
      </div>
    </Provider>
  );
}

export default withRouter(App);
