import './App.css';
import NavBar from './components/NavBar';

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
   c = "shivam";
  render() {
    return (
      <div>
        <NavBar/>
        <NewsComponent pageSize={9} country="in" category="technology" />
      </div>
    )
  }
}

// apiKey = 9027f572576a4d77abbcbf55998d326c