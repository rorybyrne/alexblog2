import React from "react";

import "./HomeWriting.css";
import reactImage from "../HomeWriting/React_logo.png";

export default class HomeWriting extends React.Component {
  render() {
    return (
      <div className="allWritingBlocks">
        <div id="writingBlock1" className="writingBlock">
          <h3 id="post1">Decentralized Corporate Governance</h3>
          <p id="text1">
            On the assumption that every founder, board member & employee is a
            strategic player (yes, even you), what mechanisms can companies
            design to..
          </p>
          <p class="readMore">Read more →</p>
        </div>
        <div id="writingBlock2" className="writingBlock">
          <h3 id="post1">Private Index Investing</h3>
          <p id="text2">How VCs should gain exposure to nascent industries</p>
          <p id="readMore2" class="readMore">
            Read more →
          </p>
        </div>
        <div id="writingBlock3" className="writingBlock">
          <h3 id="post1">Perfect competition is outdated</h3>
          <p id="text3">
            Technology has the ability to disrupt tried & tested economic
            frameworks
          </p>
          <p id="readMore2" class="readMore">
            Read more →
          </p>
        </div>
        <a href="/Writing">
          <div id="writingBlock4" className="writingBlock">
            <p class="readMore2">See all posts →</p>
          </div>
        </a>
        <div id="writingBlock5" className="writingBlock">
          <p>
            This website was built with React, Express.js and Netlify; three
            technologies that I'm pretty excited about.
          </p>
          <img alt="ReactLogo" id="reactImage" src={reactImage}></img>
        </div>
        <div className="Features">
          <a href="https://siliconangle.com/2020/06/25/covid-19-drags-venture-capitalists-hedge-bets-healthcare-tech-profits/">
            <p>🗞 Featured in SiliconAngle 🗞</p>
          </a>
        </div>
      </div>
    );
  }
}
