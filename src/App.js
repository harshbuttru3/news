import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<NewsComponent key="general" pageSize={9} country="in" category="general" />} />
            <Route path='/business' element={<NewsComponent key="business" pageSize={9} country="in" category="business" />} />
            <Route path='/entertainment' element={<NewsComponent key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            {/* <Route path='/general' element={<NewsComponent key="general" pageSize={9} country="in" category="general" />} /> */}
            <Route path='/science' element={<NewsComponent key="science" pageSize={9} country="in" category="science" />} />
            <Route path='/technology' element={<NewsComponent key="technology" pageSize={9} country="in" category="technology" />} />
            <Route path='/health' element={<NewsComponent key="health" pageSize={9} country="in" category="health" />} />
            <Route path='/sports' element={<NewsComponent key="sports" pageSize={9} country="in" category="sports" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


// apiKey = 9027f572576a4d77abbcbf55998d326c