import React from 'react';
import moment from 'moment';
import ReviewImages from './ReviewImages.jsx';
import StarRatings from 'react-star-ratings';


class CustomerReview extends React.Component {
    constructor(props) {
        super(props);

        this.helpfulCount = this.helpfulCount.bind(this);

        this.state = {
            count : false,
            info : {}
        };
    }

    helpfulCount(e) {
        if (!this.state.count) {
            this.setState({count : true});
            return fetch('/api/reviews/' + this.state.info.id, {
                method: 'PATCH'})
            .then(response => {
                return response.json();
            });
        }
    }
    
    componentDidMount() {
        this.setState({info : this.props.info});
    }

    render() {
        if(this.props.info !== undefined) {
            return (
            <div className="review">
                <div className="user">
                    <div className="avatar"><img src="https://s3-us-west-1.amazonaws.com/customer-review-images/avatar.png"></img></div>
                    <div className="username">{this.state.info.customer_username}</div>
                </div>
                <div className="rating_title_box">
                    <div className="stars">
                        <StarRatings
                            rating={this.state.info.rating}
                            starRatedColor="rgb(255, 213, 79)"
                            numberOfStars={5}
                            name='rating'
                            starDimension="16px"
                            starSpacing="2px"
                        />
                    </div>
                    <div className="title">{this.state.info.title}</div>
                </div>
                <div className="date">{moment(this.state.info.review_date).format('ll')}</div>
                <div className="version">version: {this.state.info.product_version}</div>
                <div className="text">{this.state.info.body}</div>
                <ReviewImages reviewId={this.props.info.id} />
                <div className="bottom_box">
                    <div className="helpful">{this.state.info.helpful_count} people found this helpful</div>
                    <button className="helpful-button" onClick={this.helpfulCount}>Helpful</button>
                    <div className="buttons">| <a href="#">Comment</a> | <a href="#">Report abuse</a></div>
                </div>
            </div>
            )
            }
        else
                return null;
    }
}

export default CustomerReview;