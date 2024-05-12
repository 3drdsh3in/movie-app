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
                    <Link to="/login">Profile</Link>
                    <Link to="/discover">Discover</Link>
                </div>
                <div className="main-footer-left-contacts">
                    <div className="main-footer-left-contacts-item">
                        <h3 className="main-footer-portfolio-header">Portfolio:</h3>
                        <p><a href="http://3drdsh3in.github.io">3drdsh3in/github.io</a></p>
                    </div>
                    <div className="main-footer-left-contacts-item">
                        <h3 className="main-footer-phone-header">Phone Number:</h3>
                        <p>777-777-7777</p>
                    </div>
                </div>
            </section>
            <section className="main-footer-right">

                <div className="main-footer-right-icons">
                    <a href="https://twitter.com/themoviedb?lang=en"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.facebook.com/themoviedb/"><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href="https://www.themoviedb.org/documentation/api"><i className="fas fa-book fa-2x"></i></a>
                </div>

                <img className="main-footer-mdb-logo" src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt="Logo" />

                <div className="main-footer-right-copyright">
                    <p>Copyright &copy;2020 by Edward Shen</p>
                </div>
            </section>
        </footer >
    )
}

export default MainFooter;