import { POST_MDB_CONFIG } from './types.js';

const saveMDBConfig = payload => ({
    type: POST_MDB_CONFIG,
    payload
});

export const postMDBConfig = url => {
    return dispatch => {
        // Fetch the 
        fetch(url)
            // Parse the JSON object data.
            .then(res => res.json())
            // Then Run the saveMDBConfig to properly flesh out the entire Movie Database data.
            .then(data => dispatch(saveMDBConfig(data)))
            // If something fucks up run error log
            .catch(error => console.log(error));
    }
};