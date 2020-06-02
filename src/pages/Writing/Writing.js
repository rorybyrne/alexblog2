// react imports

import React from "react";

// component imports

import BlogSlider from "../../BlogSlider/Blogslider";
import Navbar from "../../Navbar/navbar";
import Underline from "../../Underline/underline";
import IncentivesAreBroken from "../../BlogPosts/Incentives-Are-Broken";

// style imports

import "./Writing.css";

// image imports

// import icon1 from "./spotify-logo-png.png";
// import icon2 from "./apple-logo.png";
// import icon3 from "./youtube-logo.png";
// import icon4 from "./anchor-logo.png";

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
      <div>
        <Navbar></Navbar>
        <div className="wholePage">
          <p className="readersManual">
            The aim of this blog is to allow you to read about a particular
            topic at a level of depth that suits{" "}
            <p className="youUnderline">you.</p>{" "}
            <p>
              As you'll see below, every post will consist of a series of
              paragraphs that can be expanded upon for those of you who want
              more detail.
            </p>
            <p>
              Oftentimes, detailed analysis is sacrificed as it's assumed that
              attention spans will be lost. I'd like to give you all more credit
              than that.
            </p>{" "}
            <p className="para">
              By hey, sometimes we're busy, we want a succinct read with our
              coffee, I want to give you that too. ☕️
            </p>
          </p>
          <div className="underline">
            <div id="underline1" className="imageUnderline"></div>
            <div id="underline2" className="imageUnderline"></div>
            <div id="underline3" className="imageUnderline"></div>
            <div id="underline4" className="imageUnderline"></div>
            <div id="underline5" className="imageUnderline"></div>
            <div id="underline6" className="imageUnderline"></div>
            <div id="underline7" className="imageUnderline"></div>
            <div id="underline8" className="imageUnderline"></div>
            <div id="underline9" className="imageUnderline"></div>
            <div id="underline11" className="imageUnderline"></div>
            <div id="underline12" className="imageUnderline"></div>
            <div id="underline13" className="imageUnderline"></div>
          </div>
          <div id="post1">
            <IncentivesAreBroken></IncentivesAreBroken>
          </div>
          <form className="formTest" onSubmit={this.handleSubmit}>
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
          <br></br>
          <BlogSlider></BlogSlider>
        </div>
      </div>
    );
  }
}

export default writingBlock;
