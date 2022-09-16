import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#details">
                Details
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#faq">
                FAQ
              </a>
            </li>

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
                <a href="https://www.reddit.com/r/gatech/comments/21ha1d/take_acid_graffiti/" target="_blank" rel="noreferrer">{name}</a>
                </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <h2><a href="https://forms.gle/qhzzaKFy1WHLM3yo6" target="_blank" rel="noreferrer">RSVP</a></h2>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#details">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
