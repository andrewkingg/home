import React from 'react';
import './App.css';
import Header from './Header.js'


class PageTemplate extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default PageTemplate;
