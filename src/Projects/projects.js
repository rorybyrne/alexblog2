// react imports

import React from "react";

// react scroll imports

// component imports

import Navbar from "../Navbar/navbar";

// style imports

import "./projects.css";

// image imports

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
    loading: true,
    followers: null,
    publicRepos: null,
    following: null,
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value.trim() });
  };

  handleSubmit(event) {
    // event.preventDefault();

    this.setState({
      buttonText: "Subscribed!",
    });
  }

  async componentDidMount() {
    const url = "https://api.github.com/users/AlexMackenzieWS";
    // "https://api.github.com/repos/AlexMackenzieWS/alexblog2/stargazers";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.following);
    const followersData = await data.followers;
    const publicReposData = await data.public_repos;
    const followingData = await data.following;
    this.setState({
      loading: false,
      followers: followersData,
      publicRepos: publicReposData,
      following: followingData,
    });
  }

  // variables

  // api is working, we're getting some json back -- if you want to get a specific property you just need to use dot notation.
  //  use

  render() {
    return (
      <div className="WholePage">
        <Navbar underlineNav="Projects"></Navbar>
        <div className="ProjectsTextBlock">
          <p className="ProjectsText">Building > Reading</p>
          <div className="GitHubApiBlock">
            <p className="GitHubApiItem">
              {this.state.loading ? (
                <div>Fetching...</div>
              ) : (
                <div>👥 Followers: {this.state.followers}</div>
              )}
            </p>
            <p className="GitHubApiItem">
              {this.state.loading ? (
                <div>Fetching...</div>
              ) : (
                <div>🏛 Repos: {this.state.publicRepos}</div>
              )}
            </p>
            <p className="GitHubApiItem">
              {this.state.loading ? (
                <div>Fetching...</div>
              ) : (
                <div id="Github-Following-Item">
                  🔭 Following: {this.state.followers}
                </div>
              )}
            </p>
            <button className="Visit-Github-Block">
              <a href="https://github.com/AlexMackenzieWS" target="blank">
                <p className="Visit-Github-Block-Text">GitHub →</p>
              </a>
            </button>
          </div>
        </div>

        <div id="gridId" className="grid">
          <div className="ProjectsItems">
            <h2>The Code For This Blog 🖌</h2>
            <p>
              Built with React, Express.js, MailChimp's API, ReactRouter, React
              Spring.
              <br></br>
              <br></br>
              Hosted with Netlify.
              <br></br>
              <br></br>
              Thanks to Ruth Sheridan, Luke Byrne, Conor Broderick and Lee
              Campbell for reviewing, answering questions and showing interest
              in this.
            </p>
            <a
              href="https://github.com/AlexMackenzieWS/alexblog2"
              target="blank"
            >
              <p className="Read">Visit Repo →</p>
            </a>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Building on the Eth Blockchain 🔄</h2>
            <p>Will soon be writing my first smart contract. V basic.</p>
            <p className="Read">Visit Repo →</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>E-Commerce Site 👟</h2>
            <p>
              Will primarily be exploring how I can work with payments APIS:
              Stripe / Shopify.
            </p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Adding Authentication, a Database and Search 🔎</h2>
            <p>
              Enabling individuals to create accounts, receive unique access
              based on these accounts and being able to search others within the
              platform based on this access.
            </p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming Soon</h2>
            <p className="ComingSoonText">🤖🧑🏼‍💻⚒</p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming Soon</h2>
            <p className="ComingSoonText"> 🤖🧑🏼‍💻⚒</p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming Soon</h2>
            <p className="ComingSoonText">🤖🧑🏼‍💻⚒</p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming Soon</h2>
            <p className="ComingSoonText">🤖🧑🏼‍💻⚒</p>
            <p className="Read">Coming Soon</p>
            <h3 className="date">31/5/20</h3>
          </div>
          <div className="ProjectsItems">
            <h2>Coming Soon</h2>
            <p className="ComingSoonText">🤖🧑🏼‍💻⚒</p>
            <p className="Read">Coming Soon</p>
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
            <div id="Mongo" className="TechButtons">
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
          <form
            className="form3"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            form-name="newsletterSubs"
            name="newsletterSubs"
            method="post"
            /* netlify attribute */
          >
            <input type="hidden" name="form-name" value="newsletterSubs" />
            <input
              onChange={this.handleChange}
              className="emailInput"
              value={this.state.email}
              placeholder="Your email"
              name="email" /* netlify attribute */
              type="email"
            ></input>
            <button
              onClick={this.handleSubmit}
              className="subButton"
              name="button"
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
