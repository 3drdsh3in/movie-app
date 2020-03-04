import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Discover.scss';

import { getDiscover } from '../../actions/getDiscover';
import postMovieGenres from '../../actions/movieActions/postMovieGenres'

function Discover(props) {

  console.log(props)
  console.log(props.genreData.genres)

  const [loadState, setLoadState] = useState(false);
  const [sortField, setSortField] = useState("popularity.desc");
  const [includeAdult, setIncludeAdult] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [yearState, setYearState] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [genreState, setGenreState] = useState('');

  useEffect(() => {
    if (!loadState) {
      const defaultQuery = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&language=en-US&sort_by=popularity.desc&page=1`
      props.discoverData.results[0]
        ?
        console.log('Query Already Sent')
        :
        props.getDiscover(defaultQuery)
      const genreQuery = `https://api.themoviedb.org/3/genre/movie/list?api_key=fb8a39c9807f2120f494db319897180d&language=en-US`;
      props.genreData.genres
        ?
        console.log('Genre Already Gotten')
        :
        props.getGenres(genreQuery)
      toggleLoadState();
    }
  }, [genreState, includeAdult, loadState, pageNum, props, sortField, voteAverage, yearState])

  const toggleLoadState = () => {
    setLoadState(true);
  }

  const handleFilterQuery = (e) => {
    e.preventDefault();
    const filterQuery = `https://api.themoviedb.org/3/discover/movie?api_key=fb8a39c9807f2120f494db319897180d&language=en-US&sort_by=${sortField}&include_adult=${includeAdult}&page=${pageNum}${yearState ? '&year=' + yearState : ''}${voteAverage ? '&vote_average.gte=' + voteAverage : ''}${genreState ? '&with_genres=' + genreState : ''}`
    console.log(filterQuery)
    props.getDiscover(filterQuery)
  }

  useEffect(() => {
    // If search results in props not exist yet, then fetch the data, if it does don't do anything.
    (props.discoverData.page === pageNum) ?
      console.log(pageNum)
      :
      props.getDiscover(`https://api.themoviedb.org/3/discover/movie?api_key=fb8a39c9807f2120f494db319897180d&language=en-US&sort_by=${sortField}&include_adult=${includeAdult}&page=${pageNum}&year=${yearState}&$vote_average.gte=${voteAverage}&with_genres=${genreState}`)
  }, [props, pageNum, sortField, includeAdult, yearState, voteAverage, genreState]);

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



  return (
    <div className="discover-container">
      <h3>Discover</h3>
      <hr />
      <div className="discover-container-filterField">
        <form onSubmit={handleFilterQuery}>
          <div className="discover-container-filterField-settings">
            <select onChange={handleSortField} className="sort_field">
              <option value="popularity.desc">Popularity</option>
              <option value="release_date.desc">Release Date</option>
              <option value="vote_average.desc">Vote Average</option>
              <option value="vote_count.desc">Vote Count</option>
            </select>
            <input placeHolder="Vote Average" onChange={handleVoteAverage} className="vote_average" type="number" min="1" max="10" />
            <input placeHolder="Year" onChange={handleYearState} className="year" type="number" min="1800" max="2050" />
            {/* <input placeHolder="Genres" onChange={handleGenreState} className="with_genres" type="text" /> */}
            <select onChange={handleGenreState} className="with_genres">
              {
                props.genreData.genres
                  ?
                  props.genreData.genres.map(data =>
                    <option value={data.id}>{data.name}</option>
                  )
                  :
                  console.log('Genre Data does not exist yet')
              }
            </select>
          </div>
          <input className="submit" value="Search" type="submit" />
        </form>
      </div>
      <div className="discover-container-itemField">
        {props.discoverData.results.map(result =>
          <Link className="discover-container-itemField-item" to={`/movie-app/details/${props.type.toLowerCase()}/${result.id}`}>
            <div className="discover-container-itemField-item-top">
              <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} />
            </div>
            <h3>{result.title}</h3>
            <div className="discover-container-itemField-item-bottom">
              <i className="fas fa-star"></i>
              <h6>{result.vote_average}</h6>
            </div>
          </Link>
        )}
      </div>
      <div className="searchResults-navigation">
        <button onClick={() => setPageNum((pageNum - 1 < 1) ? 1 : (pageNum - 1))}>Previous</button>
        <button onClick={() => setPageNum(
          props.discoverData.results ?
            (props.discoverData.results.length < 20) ? pageNum : (pageNum + 1)
            :
            1
        )}> Next</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  apiKey: state.getDiscover.apiKey,
  discoverData: state.getDiscover,
  type: state.setItemType.itemType,
  genreData: state.postMovieGenres
})

const mapDispatchToProps = dispatch => ({
  getDiscover: url => dispatch(getDiscover(url)),
  getGenres: url => dispatch(postMovieGenres(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);