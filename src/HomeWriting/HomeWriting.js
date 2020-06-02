import React from "react";

import "./HomeWriting.css";
import { render } from "@testing-library/react";
import reactImage from "../HomeWriting/React_logo.png";
import northflankImage from "../HomeWriting/northflank.png";

export default class HomeWriting extends React.Component {
  render() {
    return (
      <div>
        <div id="writingBlock1" className="writingBlock">
          <h3 id="post1">Incentives are broken</h3>
          <p id="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p class="readMore">Read more →</p>
        </div>
        <div id="writingBlock2" className="writingBlock">
          <h3 id="post1">Incentives are broken</h3>
          <p id="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p id="readMore2" class="readMore">
            Read more →
          </p>
        </div>
        <div id="writingBlock3" className="writingBlock">
          <h3 id="post1">Incentives are broken</h3>
          <p id="text3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p id="readMore2" class="readMore">
            Read more →
          </p>
        </div>
        <div id="writingBlock4" className="writingBlock">
          <p class="readMore2">See all posts →</p>
        </div>
        <div id="writingBlock5" className="writingBlock">
          <p>
            This website was built with React, Substack and Northflank; three
            technologies that I'm pretty excited about.
          </p>
          <img id="reactImage" src={reactImage}></img>
        </div>
      </div>
    );
  }
}
