
import { TOGGLE_NAV } from '../actions/types';

// Initial State of the Navbar hamburger toggle is false.
const initialState = {
    navStatus: false
};

const toggleMav = (state = initialState, action) => {
    // console.log('Nav Status Initialized')
    switch (action.type) {
        // In the case a TOGGLE_NAV action is called ...
        case TOGGLE_NAV:
            return {
                ...state,
                navStatus: state.navStatus ? false : true
            }
        default:
            return state;
    }
}

export default toggleMav;