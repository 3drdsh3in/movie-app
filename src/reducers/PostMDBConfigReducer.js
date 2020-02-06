
import { POST_MDB_CONFIG } from '../actions/types';

const initialState = {
    // Your key:
    apiKey: 'fb8a39c9807f2120f494db319897180d',
    // Alan's API key:
    // apiKey: '12a5356516535d4d67654a936a088c1b'
};

const PostMDBConfig = (state = initialState, action) => {
    switch (action.type) {
        case POST_MDB_CONFIG:
            return {
                // The Initial State /w the apiKey component:
                ...state,
                // The entire ... idk for now lol.
                ...action.payload
            };
        default:
            return state;
    }
}

export default PostMDBConfig;