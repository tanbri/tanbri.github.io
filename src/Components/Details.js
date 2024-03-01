import React, { Component } from "react";
import Fade from "react-reveal";

class Details extends Component {
  render() {
    if (!this.props.data) return null;

    const pic = "images/" + this.props.data.image;
    const { when } = this.props;

    return (
      <section id="details">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={pic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Where</h2>
                  <p className="address">
                    <span>
                      Monday Night Garage
                      <br />
                      933 Lee St SW, Atlanta, GA 30310
                    </span>
                  </p>
              <h2>When</h2>
              <p>{when}</p>
              <div className="row">
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Details;
