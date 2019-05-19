import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header"
import ContentContainer from "./ContentContainer"

export const App = props => {
  return (
    <Router>
      <Header />
      <ContentContainer />
    </Router>
  );
};

export default App;
