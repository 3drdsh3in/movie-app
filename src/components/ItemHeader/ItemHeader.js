import React from 'react';
import { Route } from 'react-router-dom';

import './ItemHeader.scss';

class ItemHeader extends React.Component {

    initHeader() {
        let headerData = this.props.details;
        // Function need to parse the headerData into JSX.

        if (!headerData === false) {
            console.log(headerData)
            return (
                <>
                    <header className="item-header" style={{ backgroundImage: `url(http://image.tmdb.org/t/p/original/${headerData.backdrop_path})` }}>
                        <div className="item-header-top">
                            <Route from="" to="/">
                                <i className="fas fa-chevron-left fa-3x"></i>
                            </Route>
                            <i className="fas fa-share fa-3x"></i>
                        </div>
                        <div className="item-header-bottom">
                            <div className="item-header-bottom-information">
                                <img className="item-header-bottom-information-poster" src={`http://image.tmdb.org/t/p/w92/${headerData.poster_path}`} />
                                <div className="item-header-bottom-information-text">
                                    <h1>{headerData.title}</h1>
                                    <div className="item-header-bottom-information-text-rating">
                                        <p>{headerData.vote_average}</p>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="item-header-bottom-information-text-language">
                                        {headerData.status ? headerData.status : ''} | {headerData.original_language ? headerData.original_language : ''}
                                    </div>
                                    <div className="item-header-bottom-information-text-genres">
                                        {headerData.genres[0] ? headerData.genres[0].name : ''} | {headerData.genres[1] ? headerData.genres[1].name : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="item-header-bottom-like">
                                <i className="far fa-heart fa-3x"></i>
                                <i className="fas fa-heart fa-3x hide"></i>
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