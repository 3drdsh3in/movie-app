import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from './images/popcorn.png';

// SCSS Stylesheets
import './MainNav.scss';
import toggleNav from '../../actions/toggleNav';

function MainNav(props) {

    console.log(props)

    const [inputState, setInputState] = useState('');

    const handleHamburgerClickEvent = () => {
        props.toggleNav();
    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputState(e.target.value);
    }

    const handleSearchQuery = () => {
        return (
            document.getElementById('navbar-search')
                ?
                inputState
                :
                ''
        );
    }

    return (
        <nav className="nav-main">
            <div className={`nav-top-section ${props.navStatus ? '' : 'hide'}`}>
                <Link to={'/movie-app/'}><img src={logo}></img></Link>

                {/* Navbar search: IMPORTANT NOTE, IDK HOW PRESSING ENTER ON THE FORM CAUSES IT TO RUN THE handleSearchQuery function comeback and elaborate since i thought it should only
                work when i click on the search button?
                */}
                <div className="nav-searchbar">
                    <form className="nav-search-form">
                        {/* Input will result in a consistent change in fieldstate for the mainnav component */}
                        <input onChange={handleInputChange} placeholder="search..." className="nav-search-form-input" type="text" name="" id="navbar-search" />
                        <Link to={inputState ? `/movie-app/search-results/${handleSearchQuery()}` : `${props.match.url}`}>
                            {/* Note: You DO NOT need to write anything for an enter event in this situation since type="submit" ensures that when the user presses enter
                        the form will automatically submit. 
                         */}
                            <button className="nav-search-form-button" type="submit"><i className="fas fa-search fa-2x"></i></button>
                        </Link>
                    </form>
                </div>
            </div>

            <button onClick={handleHamburgerClickEvent} className={`hamburger hamburger--spin js-hamburger ${props.navStatus ? 'is-active' : ''}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <div className={`nav-split-section ${props.navStatus ? '' : 'hide'}`}>
                <Link to={'/movie-app/'}>
                    <div className="nav-split-section-item">
                        <i className="fas fa-home fa-2x"></i>
                    </div>
                </Link>
                <Link to={'/movie-app/login'}>
                    <div className="nav-split-section-item">
                        <i className="fas fa-user-circle fa-2x"></i>
                    </div>
                </Link>
                <Link to={'/movie-app/discover'}>
                    <div className="nav-split-section-item">
                        <i className="far fa-compass fa-2x"></i>
                    </div>
                </Link>
            </div>
        </nav>
    )

}
// Give the component props some important state properties via the following container
const mapStateToProps = state => ({
    apiKey: state.PostMDBConfig.apiKey,
    navStatus: state.toggleNav.navStatus
})
// Give the component props the important toggleNav function via the following container.
const mapDispatchToProps = dispatch => ({
    toggleNav: () => dispatch(toggleNav())
})


// Get from the current redux store the state/dispatches & map them to props
// ...before injecting them into the MainNav component {Thus completing it as a container component}.
export default connect(mapStateToProps, mapDispatchToProps)(MainNav);