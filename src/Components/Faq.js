import React, { Component } from "react";
import Slide from "react-reveal";

class Faq extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const { acid } = this.props;

    return (
      <section id="faq">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Getting here?</span>
              </h1>
            </div>
                <p className="faq-answer">Navigate to 758 N Ridgewood Pl. We're the back left unit.</p>
          </div>
        </Slide>

        { acid ?
          <Slide left duration={1300}>
            <div className="row education">
              <div className="three columns header-col">
                <h1>
                  <span>Parking?</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <p className="faq-answer">
                    Our immediate street only allows parking from 8AM to 6PM.
                    If you want to find an adjacent street to park on,
                    please check the signs and make sure other cars don't have permits.
                    Or just Uber.
                  </p>
                </div>
              </div>
            </div>
          </Slide> :

          <Slide left duration={1300}>
            <div className="row education">
              <div className="three columns header-col">
                <h1>
                  <span>Parking?</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <p className="faq-answer">None on our immediate street. 
                    If you want to find an adjacent street to park on,
                    please check the signs and make sure other cars don't have permits.
                    Or just Uber.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        }

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Gate Code?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">2257</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Food?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">Breakfast will be served at 9AM. We will be providing lunch as well.</p>
              </div>
            </div>
          </div>
        </Slide>

        { !acid &&
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Activities???</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">Oh yes.</p>
              </div>
            </div>
          </div>
        </Slide>
        }

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Lost As Fuck?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">Call 770 885 3245 or 678 510 6777 you dumbass.</p>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Faq;
