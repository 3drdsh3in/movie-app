import React from 'react';
import { Link } from 'react-router-dom';

// SCSS
import './MainFooter.scss';

function MainFooter() {
    return (
        <footer className="main-footer">
            <section className="main-footer-left">
                <div className="main-footer-left-header">
                    <h1 className="main-footer-left-header-name">Movie App</h1>
                    <hr />
                    <Link to="/">Home</Link>
                    <Link to="/user">Profile</Link>
                    <Link to="/discover">Discover</Link>
                </div>
                <div className="main-footer-left-contacts">
                    <div className="main-footer-left-contacts-item">
                        <h3 className="main-footer-portfolio-header">Portfolio:</h3>
                        <p><Link to="/discover">3drdsh3in/github.io</Link></p>
                    </div>
                    <div className="main-footer-left-contacts-item">
                        <h3 className="main-footer-phone-header">Phone Number:</h3>
                        <p>777-777-7777</p>
                    </div>
                </div>
            </section>
            <section className="main-footer-right">

                <div className="main-footer-right-icons">
                    <Link to=""><i className="fab fa-twitter fa-2x"></i></Link>
                    <Link to=""><i className="fab fa-facebook-f fa-2x"></i></Link>
                    <Link to=""><i className="fas fa-book fa-2x"></i></Link>
                </div>

                <img className="main-footer-mdb-logo" src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" />

                <div className="main-footer-right-copyright">
                    <p>Copyright &copy;2020 by Edward Shen</p>
                </div>
            </section>
        </footer>
    )
}

export default MainFooter;