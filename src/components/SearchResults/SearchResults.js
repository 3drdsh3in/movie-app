import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import searchData from '../../actions/searchData';

import './SearchResults.scss';

function SearchResults(props) {
    console.log(props);

    const [searchState, setSearchState] = useState([props.match.params.query]);
    const [pageState, setPageState] = useState(1);

    useEffect(() => {
        // If search results in props not exist yet, then fetch the data, if it does don't do anything.
        (props.match.params.query === searchState) ?
            console.log('Does not exist yet')
            :
            props.searchData(`https://api.themoviedb.org/3/search/movie?api_key=${props.apiKey}&language=en-US&query=${props.match.params.query}&page=1&include_adult=false`)
        setSearchState(props.match.params.query)

    }, [props, searchState]);

    useEffect(() => {
        // If search results in props not exist yet, then fetch the data, if it does don't do anything.
        (props.searchResults.page === pageState) ?
            console.log('Same Page')
            :
            props.searchData(`https://api.themoviedb.org/3/search/movie?api_key=${props.apiKey}&language=en-US&query=${props.match.params.query}&page=${pageState}&include_adult=false`)

    }, [props, pageState]);



    return (
        <div className="searchResults">
            <h3>Search Results for "{props.match.params.query}"</h3>
            <hr />
            <div className="searchResults-container">
                {/* Loop through and display all movies with existing images */}
                {props.searchResults.results ?
                    props.searchResults.results.map(result => (result.poster_path ?
                        <Link className="searchResults-container-item" to={`/movie-app/details/${props.itemType.toLowerCase()}/${result.id}`} >
                            <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt="pic" />
                            <h3>{result.title}</h3>
                        </Link>
                        :
                        console.log('Image doesnt exist')
                    ))
                    :
                    <p>Search Results Component</p>}
            </div>
            <div className="searchResults-navigation">
                {/* onClick={setPageState(pageState + 1) */}
                <button onClick={() => setPageState(pageState - 1)}>Previous</button>
                <button onClick={() => setPageState(pageState + 1)}> Next</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    apiKey: state.searchData.apiKey,
    searchResults: state.searchData,
    itemType: state.setItemType.itemType,
})

const mapDispatchToProps = (dispatch) => ({
    searchData: url => dispatch(searchData(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);