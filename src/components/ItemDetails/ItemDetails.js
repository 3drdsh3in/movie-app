import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import getMovieDetails from '../../actions/movieActions/getMovieDetails';
import getMovieCredits from '../../actions/movieActions/getMovieCredits';
import getMovieTrailers from '../../actions/movieActions/getMovieTrailers';
import getMovieReviews from '../../actions/movieActions/getMovieReviews';

import getTVDetails from '../../actions/TVActions/getTVDetails';
import getTVCredits from '../../actions/TVActions/getTVCredits';
import getTVTrailers from '../../actions/TVActions/getTVTrailers';
import getTVReviews from '../../actions/TVActions/getTVReviews';

import ItemHeader from '../ItemHeader/ItemHeader';
import PeopleCarousel from '../PeopleCarousel/PeopleCarousel';
import ItemReviews from '../ItemReviews/ItemReviews';
import ItemTrailers from '../ItemTrailers/ItemTrailers';


class ItemDetails extends React.Component {

    // Order of the lifecycle components here is completely different to alan's
    // even though the code is almost identical.

    componentDidMount() {
        let item_id = this.props.match.params.id
        this.getFilmData(item_id)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillMount')
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.getFilmData(nextProps.match.params.id, nextProps.match.params.type);
        }
    }

    // If Movie:
    // Get:
    // Name, Rating [Star Rating?], Genre
    // Movie wallpaper thing, movie wallpaper #2 thing
    // Movie Summary, Movie Trailers, Movie Reviews
    // Movie Cast Portraits.
    // else:
    // Do the same shit but for TV shows.

    // Display the corresponding shit to the screen via render() return.

    // Add MainFooter At the end of all this.

    getFilmData(id, itemType = this.props.match.params.type) {
        let apiKey = this.props.MDBConfig.apiKey;
        // this.props.match will be accessible as soon as any <Route path=""> type tag is used in JSX parents.
        switch (itemType) {
            case "movie":
                this.props.getMovieDetails(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
                this.props.getMovieCredits(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
                this.props.getMovieTrailers(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
                this.props.getMovieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
                break
            case "tv":
                this.props.getTVDetails(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`)
                this.props.getTVCredits(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`)
                this.props.getTVTrailers(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`)
                this.props.getTVReviews(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
                break
            default:
                console.log('Get Movie/TV Info Failed')
        }
    }
    render() {

        let itemType = this.props.match.params.type;
        let dispDetails, dispCredits, dispTrailers, dispReviews;
        switch (itemType) {
            case "movie":
                dispDetails = this.props.movieDetails;
                dispCredits = this.props.movieCredits;
                dispTrailers = this.props.movieTrailers;
                dispReviews = this.props.movieReviews;
                break;
            case "tv":
                dispDetails = this.props.TVDetails;
                dispCredits = this.props.TVCredits;
                dispTrailers = this.props.TVTrailers;
                dispReviews = this.props.TVReviews;
                break;
            default:
                console.log('handeItemDisplay has fucking failed')
        }

        return (
            <>
                <ItemHeader details={dispDetails.overview ? dispDetails : ''} />
                <PeopleCarousel details={dispDetails ? dispDetails : ''} credits={dispCredits ? dispCredits : ''} />
                <ItemTrailers trailers={dispTrailers ? dispTrailers : ''} />
                <ItemReviews reviews={dispReviews ? dispReviews : ''} />
            </>
        )
    }
}

// Get the initial states specified by the corresponding reducers
const mapStateToProps = state => ({
    // Need APIKEY in PostMDB Config to make calls:
    apiKey: state.PostMDBConfig.apiKey,
    MDBConfig: state.PostMDBConfig,

    // Used to make decision on whether to get details of specific movie or tv show
    itemType: state.setItemType,

    movieDetails: state.getMovieDetails,
    movieCredits: state.getMovieCredits,
    movieTrailers: state.getMovieTrailers,
    movieReviews: state.getMovieReviews,

    TVDetails: state.getTVDetails,
    TVCredits: state.getTVCredits,
    TVTrailers: state.getTVTrailers,
    TVReviews: state.getTVReviews,
});

// Use the imported actions objects to dispatch an action to the redux store.
const mapDispatchToProps = dispatch => ({

    getMovieDetails: url => dispatch(getMovieDetails(url)),
    getMovieCredits: url => dispatch(getMovieCredits(url)),
    getMovieTrailers: url => dispatch(getMovieTrailers(url)),
    getMovieReviews: url => dispatch(getMovieReviews(url)),

    getTVDetails: url => dispatch(getTVDetails(url)),
    getTVCredits: url => dispatch(getTVCredits(url)),
    getTVTrailers: url => dispatch(getTVTrailers(url)),
    getTVReviews: url => dispatch(getTVReviews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);