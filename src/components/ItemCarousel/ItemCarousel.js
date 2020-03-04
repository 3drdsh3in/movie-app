import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ItemCarousel.scss';

class ItemCarousel extends Component {

    render() {
        const config = this.props.MDBConfig;

        return (
            <div className="carousel-container" data-wow-duration="3s">

                <div className="swiper-container">
                    <h2 className="swiper-container__title">{this.props.title}</h2>

                    {/* Loops through item data and creates a carousel item */}
                    <div className="swiper-wrapper">
                        {this.props.items.map((movie, i) => (

                            <div key={movie.id} className="swiper-slide" >
                                <Link to={`/movie-app/details/${this.props.type.toLowerCase()}/${movie.id}`} >
                                    <img className="swiper-slide__image" src={`https://image.tmdb.org/t/p/w342/${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.poster_sizes[1] : ''}${movie.poster_path}`} alt={movie.title} />
                                    <h3 className="swiper-slide__title">{movie.title}</h3>
                                    <h3 className="swiper-slide__title">{movie.original_name}</h3>
                                    <p className="swiper-slide-rating">
                                        <svg className="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg>
                                        {movie.vote_average}
                                    </p>
                                </Link>
                            </div>

                        ))}
                    </div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination"></div>
                </div>

                <hr className="carousel-container__separator" />
            </div>
        );
    }
}

export default ItemCarousel;