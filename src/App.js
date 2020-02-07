import React from 'react';

import Home from './components/Home/Home';
import './App.css';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <SearchResults />
        <Home />
      </div>
    </Router>
  );
}

export default App;
