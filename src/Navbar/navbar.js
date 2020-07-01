// Global imports
import React from "react";

import TwitterImage from "./twitter.svg";
import GmailImage from "./gmail.svg";

// Style imports
import "./navbar.css";

// Component Imports

class Navbar extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      navItem1: "navItem1",
      navItem2: "navItem2",
      navItem3: "navItem3",
    };
  }
  // Functions

  // lifecycle methods

  componentDidMount = () => {
    console.log(this.props); // this console.logged {testNav: true} based on the props we gave our navbar in our writing component. Works!!!
    if (this.props.underlineNav === "Writing") {
      this.setState({
        navItem2: "navItem1",
        navItem1: "navItem2",
        navItem3: "navItem3",
      });
    }
    if (this.props.underlineNav === "Projects") {
      this.setState({
        navItem2: "navItem3",
        navItem1: "navItem2",
        navItem3: "navItem1",
      });
    }
  };

  // Render Function

  render() {
    return (
      <div>
        <div className="navBar">
          <nav>
            <div class="nav-links">
              <p id={this.state.navItem1} className="navItem">
                <a id="link1" href="/">
                  Home
                </a>
              </p>
              <p id={this.state.navItem2} className="navItem">
                <a id="link1" href="/Writing">
                  Writing
                </a>
              </p>
              <p id={this.state.navItem3} className="navItem">
                <a id="link1" href="/Projects">
                  Projects
                </a>
              </p>
              <p id="navItem4" className="navItem">
                Contact
              </p>
              <a
                href="https://twitter.com/venturemackital?ref_src=twsrc%5Etfw"
                data-show-count="true"
              >
                <img className="TwitterImage" src={TwitterImage}></img>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
              <a href="mailto:al@venturemackital.com">
                <img className="GmailImage" src={GmailImage}></img>
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

// Exports
export default Navbar;
