// Global Imports

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Style imports

import "./ImageHome.css";

// Component imports

import image1 from "./AlexImagePN.png";

// MailChimp API

// const mailChimpApiKey = "29af470d6d9e2dc483b8eb67aa5d7478-us20";

//Components

class ImageHome extends React.Component {
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
    // event.preventDefault();

    this.setState({
      buttonText: "Subscribed!",
    });
  }

  // TODO add netlify forms to all other components within your site, currently they're still making POST requests

  render() {
    return (
      <Router>
        {/* <section className="polaroidCard"> */}
        <div className="AlexHomeImageDiv">
          {/* <section> */}
          <div className="row1">
            <img className="AlexImage1" src={image1} alt=""></img>
            <div className="textIntroCircle"></div>
            <div className="textIntro">
              <p id="helloWorldText">/*Hello, World*/ 🌍</p>
              <br></br>
              <p id="paragraph1">
                I'm Alex Mackenzie, currently the Head of Investors at{" "}
                <a href="https://websummit.com/">Web Summit</a>. Formerly,
                VMware.
              </p>
              <br></br>
              <p id="paragraph2">
                Welcome to the grand conclave of my interest set: Programming,
                crypto, economics, venture, psychology, startups & mexican food.
              </p>
              <br></br>
              <p id="paragraph3" className=" textDescription">
                I write in detail on the, oftentimes, technically complexed
                topics that I'd like to learn more about. This{" "}
                <a href="/Writing">post</a> is a good start if you're interested
                in learning something new.
              </p>
              <p className="textDescription"></p>
            </div>
          </div>
          {/* </section> */}
        </div>
        <div id="colorBlock1" className="colorBlock"></div>
        <div id="colorBlock2" className="colorBlock"></div>
        <div className="formDiv">
          <form
            className="formtest"
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
        <div className="underline">{/* <Underline></Underline> */}</div>
        {/* </section> */}
      </Router>
    );
  }
}

export default ImageHome;
