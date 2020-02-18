
import { GET_TV_FAVOURITES } from '../types';

const saveTVFavorites = payload => ({
    type: GET_TV_FAVOURITES,
    payload
});

const getTVFavorites = url => {
    return dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(saveTVFavorites(data)))
            .catch(error => console.log(error));
    };
};

export default getTVFavorites;