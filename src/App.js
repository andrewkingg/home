import React from 'react';
import './App.css';
import Home from './Home.js'
import AboutMe from './AboutMe'
import Designs from './Designs'
import PageTemplate from './PageTemplate.js'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header/>
          <Route exact path={"/home"} component={Home}></Route>
          <Route exact path={"/about"} component={AboutMe}></Route>
          <Route exact path={"/designs"} component={Designs}></Route>
          <Redirect from="/" exact to="/home" />
        </Router>
      </div>
    );
  }
}

export default App;
