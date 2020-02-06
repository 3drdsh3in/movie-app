import React from 'react';

import './App.css';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <SearchResults />
      </div>
    </Router>
  );
}

export default App;
