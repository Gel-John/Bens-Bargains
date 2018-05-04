import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Footer } from "react-materialize";

import About from "./components/About";
import Header from "./components/Header";
import Login from "./components/Login";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
  
}

export default App;
