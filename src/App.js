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
                name='Brookwood High School 10 Year Reunion'
                description='Class of 2014'
                rsvp='https://docs.google.com/spreadsheets/d/1-bOGo159UAo7KxOc1ZijTcVlHkuxeXpEeGxgVkpFUYs/edit?fbclid=IwAR249alO0BfxvggZukMcK7sHVutOb6JjF1sDZ9krd0Xx2HewC7sq2owV1qc#gid=0'
                type='polygon'
              />
              <Details
                data={this.state.resumeData.main}
                when='June 1, 2024, 5PM–8PM EDT'
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
                when='January 7, 2023, 12PM PST'
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
