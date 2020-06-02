import React from "react";
import "./Blogslider.css";

class BlogSlider extends React.Component {
  render() {
    return (
      <div className="reset">
        <div className="BlogSlider">
          <div id="blog1" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog2" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog3" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog4" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog4" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="blog5" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lobortis euismod mi et bibendum.
            </p>
            <p className="ReadMore">Read more →</p>
          </div>
          <div id="ComingSoonBlog" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">Coming soon</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
          <div id="ComingSoonBlog" className="BlogSliderItems">
            <h3>Title</h3>
            <p id="para1">Coming soon.</p>
            <p className="ReadMore2">
              Want me to write on a particular topic? Let me know →
            </p>
          </div>
        </div>
        <button className="ClickArrow">➡️</button>
      </div>
    );
  }
}

export default BlogSlider;
