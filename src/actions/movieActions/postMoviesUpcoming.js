import { POST_MOVIES_UPCOMING } from '../types';

const saveMoviesTopRated = payload => ({
    type: POST_MOVIES_UPCOMING,
    payload
})

const postMoviesTopRated = url => {
    return dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(saveMoviesTopRated(data)))
            .catch(error => console.log(error))
    }
}

export default postMoviesTopRated;