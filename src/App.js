import React from 'react';
import './App.css';
import Home from './Home.js'
import AboutMe from './AboutMe'
import PageTemplate from './PageTemplate.js'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path={"/"} component={PageTemplate} />
          <Route path={"/home"} component={Home}></Route>
          <Route path={"/about"} component={AboutMe}></Route>
          <Redirect from="/" exact to="/home" />
        </Router>
      </div>
    );
  }
}

export default App;
