import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Faq from "./Components/Faq";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <>
      <Router>
      <div>
        <Routes>
          
          <Route path='/'>
            <Route exact path='' element={
            <div className='App'>
              <Header
                name='happy halloween :)'
                description='show up in a costume'
                rsvp='https://forms.gle/TvaCbUssZwbLYKNVA'
                type='fountain'
              />
              <Details
                data={this.state.resumeData.main}
                when='October 29, 2022, 8PM PDT'
              />
              <Faq data={this.state.resumeData.resume} />
              <Footer data={this.state.resumeData.main} />
            </div>
            } />
          </Route>

          <Route path='/acid'>
          <Route
            exact path=''
            element={
            <div className='App'>
              <Header
                name='TAKE ACID'
                description='We have some tabs, but quality is questionable. Feel free to BYOT.'
                rsvp='https://forms.gle/GodVH82EgMjmXNEWA'
                type='lines'
              />
              <Details
                data={this.state.resumeData.main}
                when='October 23, 2022, 10AM PDT'
              />
              <Faq
                data={this.state.resumeData.resume}
                acid
              />
              <Footer data={this.state.resumeData.main} />
            </div>
            }
            />
          </Route>
        </Routes>
      </div>
    </Router>
      </>
    );
  }
}

export default App;
