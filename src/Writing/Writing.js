// react imports

import React from "react";

// component imports

import BlogSlider from "../BlogSlider/Blogslider";
import Navbar from "../Navbar/navbar";
import IncentivesAreBroken from "../BlogPosts/Incentives-Are-Broken";

// style imports

import "./Writing.css";

// Component

class writingBlock extends React.Component {
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
    this.setState({
      buttonText: "Subscribed!",
    });
  }

  render() {
    return (
      <div>
        <Navbar underlineNav="Writing"></Navbar>
        <div className="wholePage">
          <div id="post1">
            <IncentivesAreBroken></IncentivesAreBroken>
          </div>
          <form
            className="form2"
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
          <br></br>
          <BlogSlider></BlogSlider>
        </div>
      </div>
    );
  }
}

export default writingBlock;
