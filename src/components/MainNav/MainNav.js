import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// SCSS Stylesheets
import './MainNav.scss';
import toggleNav from '../../actions/toggleNav';
import '../../../node_modules/hamburgers/dist/hamburgers.min.css';

function MainNav(props) {

    // Add animations to page upon mount completion [Comeback when page is properly structured]
    useEffect(() => {

    }, [])

    const handleHamburgerClickEvent = () => {
        props.toggleNav();
    }

    console.log(props);

    return (
        <nav className="nav-main">
            <div className="nav-top-section">
                <img src="https://img.icons8.com/cotton/64/000000/3d-glasses.png"></img>
                <div className="nav-searchbar">
                    <form className="nav-search-form">
                        <input className="nav-search-form-input" type="text" name="" id="" />
                        <button className="nav-search-form-button" type="submit"><i className="fas fa-search fa-2x"></i></button>
                    </form>
                </div>
            </div>
            <button onClick={handleHamburgerClickEvent} className={`hamburger hamburger--spin js-hamburger ${props.navStatus ? 'is-active' : ''}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <div className="nav-split-section">
                <Link to={'/'}>
                    <div className="nav-split-section-item">
                        <i className="fas fa-home fa-2x"></i>
                    </div>
                </Link>
                <Link to={'/user'}>
                    <div className="nav-split-section-item">
                        <i className="fas fa-user-circle fa-2x"></i>
                    </div>
                </Link>
                <Link to={'/discover'}>
                    <div className="nav-split-section-item">
                        <i className="far fa-compass fa-2x"></i>
                    </div>
                </Link>
            </div>
        </nav>
    )

}
// Give the component props some important state properties.
const mapStateToProps = state => ({
    apiKey: state.PostMDBConfig.apiKey,
    navStatus: state.toggleNav.navStatus
})
// Give the component props the important toggleNav function.
const mapDispatchToProps = dispatch => ({
    toggleNav: () => dispatch(toggleNav())
})

// Pass current (two of the) app's state into the component above along with a 
export default connect(mapStateToProps, mapDispatchToProps)(MainNav);