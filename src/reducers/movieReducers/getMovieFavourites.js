
import { GET_MOVIE_FAVOURITES } from '../../actions/types';

const initialState = {
    results: []
};

const getMovieFavorites = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_FAVOURITES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default getMovieFavorites;