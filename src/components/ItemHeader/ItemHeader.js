import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import './ItemHeader.scss';

class ItemHeader extends React.Component {

    initHeader() {
        let headerData = this.props.details;
        console.log(this.refs)
        // Function need to parse the headerData into JSX.

        if (!headerData === false) {
            console.log(headerData)
            return (
                <>
                    <header className="item-header" style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original/${headerData.backdrop_path})` }}>
                        <div className="item-header-container">
                            <div className="item-header-container-top">
                                <div onClick={this.props.history.goBack}>
                                    <i className="fas fa-chevron-left fa-3x"></i>
                                </div>
                                <i className="fas fa-share fa-3x"></i>
                            </div>
                            <div className="item-header-container-bottom">
                                <div className="item-header-container-bottom-information">
                                    <img className="item-header-container-bottom-information-poster" src={`http://image.tmdb.org/t/p/w300/${headerData.poster_path}`} />
                                    <div className="item-header-container-bottom-information-text">
                                        <h2>{headerData.title}</h2>
                                        <div className="item-header-container-bottom-information-text-rating">
                                            <h3>{headerData.vote_average}</h3>
                                            <i className={`fas fa-star ${(headerData.vote_average >= 1) ? (headerData.vote_average >= 2) ? 'highlight' : 'highlight-half' : ''}`}></i>
                                            <i className={`fas fa-star ${(headerData.vote_average >= 3) ? (headerData.vote_average >= 4) ? 'highlight' : 'highlight-half' : ''}`}></i>
                                            <i className={`fas fa-star ${(headerData.vote_average >= 5) ? (headerData.vote_average >= 6) ? 'highlight' : 'highlight-half' : ''}`}></i>
                                            <i className={`fas fa-star ${(headerData.vote_average >= 7) ? (headerData.vote_average >= 8) ? 'highlight' : 'highlight-half' : ''}`}></i>
                                            <i className={`fas fa-star ${(headerData.vote_average >= 9) ? (headerData.vote_average >= 10) ? 'highlight' : 'highlight-half' : ''}`}></i>
                                        </div>
                                        <div className="item-header-container-bottom-information-text-language">
                                            {headerData.status ? headerData.status : ''} | {headerData.original_language ? headerData.original_language : ''}
                                        </div>
                                        <div className="item-header-container-bottom-information-text-genres">
                                            {headerData.genres[0] ? headerData.genres[0].name : ''} | {headerData.genres[1] ? headerData.genres[1].name : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="item-header-container-bottom-like">
                                    <i className="fas fa-heart fa-3x"></i>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="headerOverlay"></div>
                </>
            )
        }
        else {
            return (
                <p>Film Information not found</p>
            )
        }
    }

    render() {
        return (
            <>
                {this.initHeader()}
            </>
        )
    }
}

export default ItemHeader;