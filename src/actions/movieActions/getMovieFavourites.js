import { GET_MOVIE_FAVOURITES } from '../types.js'

const saveMovieFavorites = payload => ({
    type: GET_MOVIE_FAVOURITES,
    payload
});

const getMovieFavorites = url => {
    return dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(saveMovieFavorites(data)))
            .catch(error => console.log(error))
    }
};

export default getMovieFavorites;