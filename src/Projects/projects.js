// react imports

import React, { useRef, useEffect } from "react";

// react scroll imports

import { Link } from "react-scroll";

// animate on scroll imports

import AOS from "aos";
import "aos/dist/aos.css";

// gsap imports

import { TweenMax, Power3 } from "gsap";

// component imports

import Navbar from "../Navbar/navbar";

// style imports

import "./projects.css";

// image imports

import octocat from "./Octocat.png";
import arrow from "./download.png";
import react from "./React.png";
import node from "./node.png";
import graphql from "./GraphQL.png";
import gatsby from "./Gatsby .png";
import tensorflow from "./Tensorflow.png";
import webpack from "./webpack.png";
import mongodb from "./mongodb.png";
import pandas from "./pandas.png";
import bootstrap from "./bootstrap.png";
import stripe from "./stripe.png";
import auth0 from "./auth0.png";

class projectsBlock extends React.Component {
  // functions

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    email: "",
    buttonText: "Subscribe",
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value.trim() });
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    this.setState({
      buttonText: "Subscribed!",
    });
  }

  render() {
    return (
      <div className="WholePage">
        <Navbar></Navbar>
        <a href="https://github.com/AlexMackenzieWS">
          <img id="octocat" src={octocat}></img>
        </a>
        {/* <div id="connector1" className="connector"></div> */}
        <p className="ProjectsText">
          Building things so I understand them better.
        </p>
        <div id="colorBlock3" className="colorBlock"></div>
        <div id="colorBlock4" className="colorBlock"></div>
        <img className="DownArrow" href="#gridId" src={arrow}></img>
        {/* <div id="connector1"></div> */}
        <div id="gridId" className="grid">
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming soon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming soon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming soon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              fringilla lacus ac enim rhoncus, semper venenatis arcu tristique.
              Donec cursus elementum fermentum. Nunc eros tellus, commodo eu
              eros at, rutrum rhoncus augue. Pellentesque non leo sed nisi
              pellentesque ornare.
            </p>
            <p className="Read">Read more →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="TechStack">
            <p>Technologies / Libraries I've worked with so far ⬇️</p>
            <div id="TechButton1" className="TechButtons">
              <a id="text1" href="https://reactjs.org/">
                React
              </a>
              <img id="React" className="TechLogos" src={react}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://nodejs.org/en/">
                Node
              </a>
              <img id="Node" className="TechLogos" src={node}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://reactjs.org/">
                GraphQL
              </a>
              <img id="Node" className="TechLogos" src={graphql}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://www.gatsbyjs.org/">
                Gatsby
              </a>
              <img id="Node" className="TechLogos" src={gatsby}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://www.tensorflow.org/">
                TensorF
              </a>
              <img id="Node" className="TechLogos" src={tensorflow}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://webpack.js.org/">
                Webpack
              </a>
              <img id="Node" className="TechLogos" src={webpack}></img>
            </div>
            <div className="TechButtons">
              <a id="MongoText" href="https://www.mongodb.com/">
                MongoDB
              </a>
              <img id="MongoDB" className="TechLogos" src={mongodb}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://pandas.pydata.org/">
                Pandas
              </a>
              <img id="Node" className="TechLogos" src={pandas}></img>
            </div>
            <div id="TechButton1" className="TechButtons">
              <a id="text1" href="https://getbootstrap.com/">
                Bootstrap
              </a>
              <img id="Node" className="TechLogos" src={bootstrap}></img>
            </div>
            <div className="TechButtons">
              <a id="stripe1" href="https://stripe.com/">
                Stripe
              </a>
              <img id="stripe" className="TechLogos" src={stripe}></img>
            </div>
            <div className="TechButtons">
              <a id="text1" href="https://facebook.github.io/react-360/">
                React360
              </a>
              <img id="React" className="TechLogos" src={react}></img>
            </div>
            <div className="TechButtons">
              <a id="auth0" href="https://auth0.com/">
                Auth0
              </a>
              <img id="Auth0" className="TechLogos" src={auth0}></img>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div id="TechButton12" className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
            <div className="TechButtons">
              <a id="text2">Learning..</a>
            </div>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              id="emailInput1"
              className="emailInput"
              value={this.state.email}
              placeholder="  Your email"
              type="email"
            ></input>
            <button
              onClick={this.handleSubmit}
              id="subButton1"
              className="subButton"
              type="submit"
              value="Subscribe"
            >
              <p>{this.state.buttonText}</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default projectsBlock;

// React, Northflank, 0Auth,
//               Stripe, AWS.
