import { GET_DISCOVER } from './types';

const discoverData = payload => ({
  type: GET_DISCOVER,
  payload
})

export const getDiscover = url => {
  return dispatch => {
    fetch(url)
      .then(results => results.json())
      .then(data => dispatch(discoverData(data)))
      .catch(err => console.log(err))
  }
}