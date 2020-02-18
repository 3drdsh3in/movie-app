import React from 'react';

import './App.css';
import Home from './components/Home/Home';
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
        <MainNav />
        <Route path="/" exact component={Home} />
        {/* Renders out a component based on a corresponding url */}
        <Route path="/details/:type/:id" exact component={ItemDetails} />
        <MainFooter />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  apiKey: state.PostMDBConfig.apiKey
});

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(App);