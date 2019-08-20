import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Event from "./components/createEvent/createEvent.js";
import Calendar from "./components/calendar.js";
import Home from "./components/Home/Home.js";


import "./App.css";


class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/calendar" component = {Calendar} />
            <Route exact patjh = "/Event" component = {Event} />
          </Switch>
          {/* <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
                react<b>calendar</b>
              </span>
            </div>

              <a 
                onClick = {this.renderCreateEvent}
                href = "#">Create Event
              </a>
          </header>
          <main>
            <Calendar />
          </main> */}
        </div>        
      </Router>

    );
  }
}

export default App;