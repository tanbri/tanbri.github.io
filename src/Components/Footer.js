import React from "react";

const Footer = props => {
    if (!props.data) return null;

    return (
      <footer>
        <div className="row">
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
