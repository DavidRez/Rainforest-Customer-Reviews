import React from 'react';
import moment from 'moment';
import ReviewImages from './ReviewImages.jsx';

class CustomerReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info : {}
        };
    }

    componentWillMount() {
        this.setState({info : this.props.info});
    }

    render() {
        if(this.state.info !== undefined) {
            return (
            <div>
                <div class="review">
                    <div class="user">
                        <div class="avatar"><img src="https://s3-us-west-1.amazonaws.com/customer-review-images/avatar.png"></img></div>
                        <div class="username">{this.state.info.customer_username}</div>
                    </div>
                    <div class="rating_title_box">
                        <div class="stars">{this.state.info.rating} out of 5 stars | </div>
                        <div class="title">{this.state.info.title}</div>
                    </div>
                    <div class="date">{moment(this.state.info.review_date).format('ll')}</div>
                    <div class="version">version: {this.state.info.product_version}</div>
                    <div class="text">{this.state.info.body}</div>
                    <ReviewImages reviewId={this.state.info.id} />
                    <div class="bottom_box">
                        <div class="helpful">{this.state.info.helpful_count} people found this helpful</div>
                        <button class="helpful-button">Helpful</button>
                        <div class="buttons">| Comment | Report abuse</div>
                    </div>
                </div>
            </div>
            )
            }
        else
                return null;
    }
}

export default CustomerReview;