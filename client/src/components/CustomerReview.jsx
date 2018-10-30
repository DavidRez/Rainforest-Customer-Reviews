import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'whatwg-fetch';

class CustomerReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : []
        };
    }

    componentWillMount() {
        fetch('http://localhost:5000/api/reviews/' + this.props.productId)
            .then(response => {
                return response.json();
            })
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
                <div class="a-section celwidget" key={i}>
                    <div class="a-profile-avatar-wrapper">
                        <div class="a-profile-avatar"><img src="https://s3-us-west-1.amazonaws.com/customer-review-images/avatar.png"></img></div>
                        <div class="a-profile-content">{review.customer_username}</div>
                    </div>
                    <div class="a-icon-alt">{review.rating} out of 5 stars</div><div class="a-size-base a-link-normal review-title a-color-base a-text-bold">{review.title}</div>
                    <div class="a-size-base a-color-secondary review-date">{moment(review.review_date).format('ll')}</div>
                    <div class="a-color-secondary">version: {review.product_version}</div>
                    <div class="a-expander-content a-expander-partial-collapse-content">{review.body}</div>
                    
                    <div class="a-size-base a-color-tertiary cr-vote-text">{review.helpful_count} people found this helpful</div>
                    <button class="a-button-input">Helpful</button><button class="a-button-input">Not Helpful</button><div class="a-size-base a-link-normal a-color-secondary a-text-normal">| Comment | Report abuse</div>
                    </div>
                    
            )}
        </div>
        )
    }
}

export default CustomerReview;