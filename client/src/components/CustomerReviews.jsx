import React from 'react';
import getReviews from '../api/getReviews.js';
import CustomerReview from './CustomerReview.jsx';

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : []
        };
    }

    componentDidMount() {
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