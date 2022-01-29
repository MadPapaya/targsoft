import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";

import themes from 'devextreme/ui/themes';
themes.initialized(() => ReactDOM.render(
  <App />,
  document.getElementById('app'),
));