import React from 'react';
import getReviews from '../api/reviews.js';
import CustomerReview from './CustomerReview.jsx';
import 'whatwg-fetch';

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : []
        };
    }

    componentWillMount() {
        getReviews(this.props.productId || '')
            .then(data => {
                this.setState({ reviews : data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
        <div>
            {this.state.reviews.map((review, i) =>
                <CustomerReview info={review} key={i} />    
            )}
        </div>
        )
    }
}

export default CustomerReviews;