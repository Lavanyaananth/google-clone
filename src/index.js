import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reducer, { initialState } from "./context/reducer";
import { StateProvider } from "./context/StateProvider";
import App from "./App";

import { Helmet, HelmetProvider } from "react-helmet-async";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <HelmetProvider>
        <App>
          <Helmet></Helmet>
        </App>
      </HelmetProvider>
    </StateProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
