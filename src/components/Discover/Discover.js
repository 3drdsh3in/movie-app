import React, { useState, useEffect } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDiscover } from '../../actions/getDiscover';
import './Discover.scss';


function Discover(props) {

  console.log(props)

  const [loadState, setLoadState] = useState(false);
  const [sortField, setSortField] = useState("popularity.desc");
  const [includeAdult, setIncludeAdult] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [yearState, setYearState] = useState(null);
  const [voteAverage, setVoteAverage] = useState(null);
  const [genreState, setGenreState] = useState(null);

  useEffect(() => {
    if (!loadState) {
      const defaultQuery = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&language=en-US&sort_by=popularity.desc&page=1`
      props.discoverData.results[0]
        ?
        console.log('Query Already Sent')
        :
        props.getDiscover(defaultQuery)
      toggleLoadState();
    }
  }, [genreState, includeAdult, loadState, pageNum, props, sortField, voteAverage, yearState])

  const toggleLoadState = () => {
    setLoadState(true);
  }

  const handleFilterQuery = (e) => {
    e.preventDefault();
    console.log('filter')
    const filterQuery = `https://api.themoviedb.org/3/discover/movie?api_key=fb8a39c9807f2120f494db319897180d&language=en-US&sort_by=${sortField}&include_adult=${includeAdult}&page=${pageNum}&year=${yearState}&$vote_average.gte=${voteAverage}&with_genres=${genreState}`
    props.getDiscover(filterQuery)
  }

  const handleSortField = (e) => {
    console.log(e.target.value)
    setSortField(e.target.value)
  }
  const handleYearState = (e) => {
    console.log(e.target.value)
    setYearState(e.target.value)
  }
  const handleVoteAverage = (e) => {
    console.log(e.target.value)
    setVoteAverage(e.target.value)
  }
  const handleGenreState = (e) => {
    console.log(e.target.value)
    setGenreState(e.target.value)
  }
  const handlePageNavigation = (pageNum) => {
    console.log(pageNum)
    setPageNum(pageNum)
  }

  return (
    <div className="discover-container">
      <h3>Discover</h3>
      <hr />
      <div className="discover-container-filterField">
        <form onSubmit={handleFilterQuery}>
          <select onChange={handleSortField} className="sort_field">
            <option value="popularity.desc">Popularity</option>
            <option value="release_date.desc">Release Date</option>
            <option value="vote_average.desc">Vote Average</option>
            <option value="vote_count.desc">Vote Count</option>
          </select>
          <input placeHolder="Vote Average" onChange={handleVoteAverage} className="vote_average" type="number" min="1" max="10" />
          <input placeHolder="Year" onChange={handleYearState} className="year" type="number" min="1800" max="2050" />
          <input placeHolder="Genres" onChange={handleGenreState} className="with_genres" type="text" />
          <input className="submit" type="submit" />
        </form>
      </div>
      <div className="discover-container-itemField">
        {props.discoverData.results.map(result =>
          <h3>{result.title}</h3>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  apiKey: state.getDiscover.apiKey,
  discoverData: state.getDiscover,
})

const mapDispatchToProps = dispatch => ({
  getDiscover: url => dispatch(getDiscover(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);