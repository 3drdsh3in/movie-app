import React from 'react';

import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Discover from './components/Discover/Discover'
import SearchResults from './components/SearchResults/SearchResults';
import ItemDetails from './components/ItemDetails/ItemDetails';
import MainNav from './components/MainNav/MainNav';
import MainFooter from './components/MainFooter/MainFooter';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/" component={MainNav} />
        <Route path="/" exact component={Home} />
        {/* Renders out a component based on a corresponding url */}
        <Route path="/details/:type/:id" exact component={ItemDetails} />
        <Route path="/search-results/:query" exact component={SearchResults} />
        <Route path="/login" exact component={Profile} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/" component={MainFooter} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  apiKey: state.PostMDBConfig.apiKey
});

export default connect(mapStateToProps)(App);