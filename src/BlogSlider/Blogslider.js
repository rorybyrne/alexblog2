import React from "react";
import "./Blogslider.css";

class BlogSlider extends React.Component {
  constructor(props) {
    super(props);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
  }

  // used a ternary operator to clean up my logic below

  state = {
    clickerRight: "BlogSliderItems",
    testVar: false,
    ClickArrow: "➡️",
  };

  // clickerFunc = () => {
  //   this.state.clicker === "BlogSliderItems"
  //     ? this.setState({ clicker: "BlogSliderItems2" })
  //     : this.setState({ clicker: "BlogSliderItems3" });
  //   console.log(this.state.clicker);
  // };
  clickRight = () => {
    if (this.state.clickerRight === "BlogSliderItems") {
      this.setState({ clickerRight: "BlogSliderItems2" });
    }
    if (this.state.clickerRight === "BlogSliderItems2") {
      this.setState({ clickerRight: "BlogSliderItems3" });
    }
    if (this.state.clickerRight === "BlogSliderItems3") {
      this.setState({ clickerRight: "BlogSliderItems4" });
    }
    if (this.state.clickerRight === "BlogSliderItems4") {
      this.setState({
        ClickArrow: (
          <p className="Back-Arrow-Paragraph" onClick={this.clickLeft}>
            🔙
          </p>
        ),
        testVar: true,
      });
    }
  };

  clickLeft = () => {
    console.log("LeftClickWorking");
    if (this.state.testVar) {
      this.setState({
        clickerRight: "BlogSliderItems3Left",
      });
    }
    if (this.state.clickerRight === "BlogSliderItems3Left") {
      this.setState({
        clickerRight: "BlogSliderItems2Left",
      });
    }
    if (this.state.clickerRight === "BlogSliderItems2Left") {
      this.setState({
        clickerRight: "BlogSliderItems",
        ClickArrow: "➡️",
      });
    }
  };

  // might have to work with a nested if statement here, more to come.

  render() {
    return (
      <div className="reset">
        <div className="BlogSlider">
          <div id="blog1" className={this.state.clickerRight}>
            <h3>Private Index Investing</h3>
            <p id="para1">
              How VCs should gain exposure to nascent industries whilst
              minimizing risk.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog2" className={this.state.clickerRight}>
            <h3>Perfect Competition is Old</h3>
            <p id="para1">
              Technology has disrupted a tried and tested economic framework, a
              new paradigm is emerging.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog3" className={this.state.clickerRight}>
            <h3>Coming Soon</h3>
            <p id="para1">
              Probably something on stablecoins Maker Dai is of partciular
              interest to me.
            </p>
            <p className="ReadMore">Coming soon</p>
          </div>
          <div id="blog4" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog5" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog6" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className={this.state.clickerRight}>
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
        </div>
        <button className="ClickArrow" onClick={this.clickRight}>
          {this.state.ClickArrow}
        </button>
      </div>
    );
  }
}

export default BlogSlider;

{
  /* <button className="ClickArrow" onClick={this.clickRight}>
          {this.state.ClickArrow}
        </button> */
}

// trying to change an entire set of elements through an onClick function, remove this once your function works.
