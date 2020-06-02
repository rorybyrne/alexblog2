// Global imports

import React, { useEffect } from "react";

import AOS from "aos";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// Style imports

import "aos/dist/aos.css";

// Component imports

import Navbar from "../Navbar/navbar";
import ImageHome from "../ImageHome/ImageHome";
import HomeWriting from "../HomeWriting/HomeWriting";

// Pages

import writingBlock from "../pages/Writing /Writing";
import home from "../Home2/home";
import projectsBlock from "../Projects/projects";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/Writing" component={writingBlock} />
          <Route path="/Projects" component={projectsBlock} />
          <Route path="/Writing" component={writingBlock} />
        </Switch>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <Navbar></Navbar>
      //     <div>
      //       <ImageHome></ImageHome>
      //     </div>
      //     <div></div>
      //     <HomeWriting></HomeWriting>
      //   </header>
      // </div>
    );
  }
}

export default App;
