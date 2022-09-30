import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Collapsible from 'react-collapsible';

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
                {name}
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <h2><a href="https://forms.gle/TvaCbUssZwbLYKNVA" target="_blank" rel="noreferrer">RSVP</a></h2>
            {/* <h2 className='rsvp'>
            <Collapsible trigger='RSVP'>
              <iframe
                title='rsvp'
                src="https://docs.google.com/forms/d/e/1FAIpQLSdIAKEnqFgK3MS4-I1EfvckxGvZHW00yTQRLBuNGzvtqnv7yQ/viewform?embedded=true"
                width="300"
                height="500"
                frameborder="0"
                marginheight="0"
                marginwidth="0">
                  Loading…
                </iframe>
            </Collapsible>
            </h2> */}
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
