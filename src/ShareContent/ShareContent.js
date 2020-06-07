// react imports

import React from "react";

// image imports

import spotify from "./spotify-logo-png.png";
import apple from "./apple-logo.png";
import youtube from "./youtube-logo.png";
import twitter from "./twitter-logo.png";

// style imports

import "./ShareContent.css";

class ShareContent extends React.Component {
  render() {
    return (
      <div className="ShareContent">
        <div className="MobileCenter">
          <img id="image1" className="ShareLogos" src={spotify}></img>
          <img id="image2" className="ShareLogos" src={apple}></img>
          <img id="image2" className="ShareLogos" src={youtube}></img>
          <div id="test">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              id="Tweet"
              class="ShareLogos"
              data-show-count="false"
            >
              <img id="TwitterLogo" src={twitter}></img>
              <p id="TweetText">Tweet</p>
            </a>
          </div>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    );
  }
}

export default ShareContent;
