// Global imports

import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Style imports

// Component imports

// Pages

import writingBlock from "../Writing /Writing";
import home from "../Home2/home";
import projectsBlock from "../Projects/projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/Writing" component={writingBlock} />
        <Route path="/Projects" component={projectsBlock} />
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

export default App;
