import { POST_MOVIE_GENRES } from '../../actions/types';

const initialState = {
  results: []
}

const postMovieGenres = (state = initialState, action) => {
  switch (action.type) {
    case POST_MOVIE_GENRES:
      return ({
        ...action.payload
      })
    default:
      return state
  }
}

export default postMovieGenres;