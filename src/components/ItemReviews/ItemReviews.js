import React from 'react';
import './ItemReviews.scss';

class ItemReviews extends React.Component {

    render() {
        return (
            <div className="ItemReviews" >
                <h2>Reviews:</h2>
                <div className="ItemReviews-content">
                    {this.props.reviews.results.length > 0 ?
                        this.props.reviews.results.map(review => (
                            <div className="ItemReviews-content-review">
                                <h3 className="ItemReviews-content-review-header">
                                    {review.author}
                                </h3>
                                <p className="ItemReviews-content-review-paragraph">
                                    {review.content}
                                </p>
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