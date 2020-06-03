// Global imports

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// Style imports

// Component imports

import Navbar from "../Navbar/navbar";
import ImageHome from "../ImageHome/ImageHome";
import HomeWriting from "../HomeWriting/HomeWriting";

// Pages

import writingBlock from "../Writing /Writing";

class home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
          <div>
            <ImageHome></ImageHome>
          </div>
          <HomeWriting></HomeWriting>
        </header>
      </div>
    );
  }
}

export default home;
