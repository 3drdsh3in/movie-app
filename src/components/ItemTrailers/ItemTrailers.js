import React from 'react';
import Swiper from 'swiper';

import './ItemTrailers.scss';

class ItemTrailers extends React.Component {

    render() {
        var swiper = new Swiper('.s2', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
                1800: {
                    slidesPerView: 5,
                },
                2000: {
                    slidesPerView: 6,
                }
            }
        });
        return (
            <div className="ItemTrailers">
                <h2 className="ItemTrailers-headername">Trailers: </h2>
                <div className="swiper-container s2">
                    <div className="swiper-wrapper">
                        {this.props.trailers.results ?
                            this.props.trailers.results.map(trailer => (
                                <div className="swiper-slide" style={{ width: '150px' }}>
                                    <iframe width="100%" height="250px" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen src={`https://www.youtube.com/embed/${trailer ? trailer.key : ''}`}>
                                    </iframe>
                                </div>
                            ))
                            :
                            <p>No Trailers Found :( </p>
                        }
                    </div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
            </div>
        )
    }

}
export default ItemTrailers;