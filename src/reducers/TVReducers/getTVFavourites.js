
import { GET_TV_FAVOURITES } from '../../actions/types';

const initialState = {
    results: []
};

const getTVFavourites = (state = initialState, action) => {
    switch (action.type) {
        case GET_TV_FAVOURITES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default getTVFavourites;