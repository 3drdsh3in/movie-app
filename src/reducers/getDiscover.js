import { GET_DISCOVER } from '../actions/types';

const initialState = {
    apiKey: 'fb8a39c9807f2120f494db319897180d',
    results: []
};

const getDiscover = (state = initialState, action) => {
    switch (action.type) {
        case GET_DISCOVER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default getDiscover;