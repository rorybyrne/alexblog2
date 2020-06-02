// Global imports
import React from "react";
import ReactDOM from "react-dom";
import image1 from "./social-media.png";
import image2 from "./communications.png";
import { Spring } from "react-spring";

// Style imports
import "./navbar.css";

// Component Imports

class Navbar extends React.Component {
  // Constructor

  // Functions

  // Render Function

  render() {
    return (
      <div>
        <div className="navBar">
          <nav>
            <div class="nav-links">
              <p id="navItem1" className="navItem">
                <a id="link1" href="/">
                  Home
                </a>
              </p>
              <p id="navItem2" className="navItem">
                <a id="link1" href="/Writing">
                  Writing
                </a>
              </p>
              <p id="navItem3" className="navItem">
                <a id="link1" href="/Projects">
                  Projects
                </a>
              </p>
              <p id="navItem4" className="navItem">
                Contact
              </p>
              <div className="burgerNav">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
              </div>
              <a
                href="https://twitter.com/venturemackital?ref_src=twsrc%5Etfw"
                data-show-count="true"
              >
                <img className="navImage1" src={image1}></img>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
              <a href="mailto:al@venturemackital.com">
                <img className="navImage2" src={image2}></img>
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

{
  /* <a href="https://twitter.com/venturemackital?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @TwitterDev</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
}
