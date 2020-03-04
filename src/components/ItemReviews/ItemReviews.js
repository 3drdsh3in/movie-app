import React from 'react';
import { Link } from 'react-router-dom';
import './ItemReviews.scss';

class ItemReviews extends React.Component {

    render() {
        console.log(this.props)
        return (

            <div className="ItemReviews" >
                <h2>Reviews</h2>
                <div className="ItemReviews-content">
                    {this.props.reviews.results.length > 0 ?
                        this.props.reviews.results.map(review => (
                            <div className="ItemReviews-content-review border-bar">
                                <h3 className="ItemReviews-content-review-header">
                                    {review.author}
                                </h3>
                                <p className="ItemReviews-content-review-paragraph">
                                    {review.content.length > 1000 ? `${review.content.slice(0, 1000)}...` : review.content}
                                </p>
                                <a href={review.url}>
                                    <span>See full review</span>
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        ))
                        :
                        <p>No Reviews Found :( </p>
                    }
                </div>
            </div>
        )
    }

}

export default ItemReviews;