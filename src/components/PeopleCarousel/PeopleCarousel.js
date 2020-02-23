import React from 'react';

import './PeopleCarousel.scss';
import Swiper from 'swiper';

class PeopleCarousel extends React.Component {

    render() {
        console.log(this.props.details.overview)
        var swiper = new Swiper('.s1', {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 0,
            pagination: {
                el: 'swiper-pagination',
                clickable: true,
            },
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
                768: {
                    slidesPerView: 3,
                },
                900: {
                    slidesPerView: 4,
                },
                1250: {
                    slidesPerView: 5,
                }
            }
        })
        return (
            <main className="item-body">
                <div className="item-body-content">
                    <div className="item-body-content-summary">
                        <h2>Summary:</h2>
                        <p>{this.props.details.overview}</p>
                    </div>
                    <div className="swiper-container s1" >
                        <h2>Cast:</h2>
                        <div className="swiper-wrapper">
                            {this.props.credits.cast.map(char => {
                                return (
                                    char.profile_path ?
                                        <div className="swiper-slide">
                                            <div className="flip-card">
                                                <div className="flip-card-inner">
                                                    <img className="flip-card-front" src={`https://image.tmdb.org/t/p/w154/${char.profile_path}`} />
                                                    <div className="flip-card-back">
                                                        <button>Details</button>
                                                        <button>Information</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4>{char.name}</h4>
                                        </div>
                                        :
                                        null
                                )
                            })}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-next swiper-button-white"></div>
                        <div className="swiper-button-prev swiper-button-white"></div>
                    </div>
                </div>
            </main>
        )
    }

}

export default PeopleCarousel;