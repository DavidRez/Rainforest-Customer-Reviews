import React from 'react';
import getReviews from '../api/getReviews.js';
import CustomerReview from './CustomerReview.jsx';

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //hold all review info for current product
            reviews : []
        };
    }

    componentDidMount() {
        //get all reviews from database for current product
        getReviews(this.props.productId || '')
            .then(data => {
                this.setState({ reviews : data });
            })
    }

    render() {
        if(this.state.reviews.length > 0)
        {
            //create each customer review
            return (
                <div>
                    {this.state.reviews.map((review, i) =>
                        <CustomerReview info={review} key={i} />    
                    )}
                </div>
            )
        }
        else 
            return <span></span>
    }
}

export default CustomerReviews;