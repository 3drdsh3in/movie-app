import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// SCSS Stylesheets
import './MainNav.scss';
import toggleNav from '../../actions/toggleNav';

function MainNav(props) {

    // Add animations to page upon mount completion [Comeback when page is properly structured]
    // useEffect(() => {

    // }, [])

    const handleHamburgerClickEvent = () => {
        props.toggleNav();
    }

    console.log(props);

    return (
        <nav className="nav-main">
            <div className={`nav-top-section ${props.navStatus ? '' : 'hide'}`}>
                <img src="https://img.icons8.com/cotton/64/000000/3d-glasses.png"></img>
                <div className="nav-searchbar">
                    <form className="nav-search-form">
                        <input placeholder="search..." className="nav-search-form-input" type="text" name="" id="" />
                        <button className="nav-search-form-button" type="submit"><i className="fas fa-search fa-2x"></i></button>
                    </form>
                </div>
            </div>

            <button onClick={handleHamburgerClickEvent} className={`hamburger hamburger--spin js-hamburger ${props.navStatus ? 'is-active' : ''}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <div className={`nav-split-section ${props.navStatus ? '' : 'hide'}`}>
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
// Give the component props some important state properties via the following container
const mapStateToProps = state => ({
    apiKey: state.PostMDBConfig.apiKey,
    navStatus: state.toggleNav.navStatus
})
// Give the component props the important toggleNav function via the following container.
const mapDispatchToProps = dispatch => ({
    toggleNav: () => dispatch(toggleNav())
})

// 
// const tempVariable = connect(mapStateToProps, mapDispatchToProps);
// console.log(tempVariable)
// console.log(tempVariable(MainNav));
// console.log(MainNav);
// export default tempVariable(MainNav);

// Get from the current redux store the state/dispatches & map them to props
// ...before injecting them into the MainNav component {Thus completing it as a container component}.
export default connect(mapStateToProps, mapDispatchToProps)(MainNav);