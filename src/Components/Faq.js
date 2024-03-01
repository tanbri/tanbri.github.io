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
                <span>Tickets?</span>
              </h1>
            </div>
                <p className="faq-answer">Tickets are $35 and covers entry and 2 drink tickets. Or $20 for just entry.</p>
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
                  <span>Plus ones?</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <p className="faq-answer">
                  Yes! Their ticket will also be $35 and covers 2 drink tickets, or $20 for just entry.
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
                <span>Rain?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">
                  Currently, we plan to be in the Monday Night Courtyard, which is an outdoor patio. 
                  It is POSSIBLE for the event date and space to be moved indoors (still at Monday Night) 
                  IF there is availablilty and depending on how many people buy tickets. Otherwise, 
                  plan for this date rain or shine. If you want it to be indoors, get more people to sign up!</p>
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
                <p className="faq-answer">
                  There is a dedicated food and bar truck in the Courtyard. 
                  They will take your drink tickets, additional drink orders, 
                  and pizza orders. Food, as of now, is not covered in your ticket.</p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>$$$?</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <p className="faq-answer">
                  The first 100-150 tickets bought need to cover the rental fee, 
                  drink tickets, and gratuity/tax. As more tickets are sold, 
                  we can potentially move our event indoors and into a larger space, 
                  or it will go toward purchasing food to share, more drink tickets, etc.</p>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Faq;
