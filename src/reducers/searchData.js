import { SEARCH_DATA } from '../actions/types';

const initialState = {
  apiKey: 'fb8a39c9807f2120f494db319897180d',
}

const searchData = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default searchData;