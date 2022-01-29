import React from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { DevExpressTable } from "./views";

function App() {
  return (
    <div className="App">
      <h1>TargSoft test-task</h1>
      <DevExpressTable />
      <Footer />
    </div>
  );
}

export default App;
