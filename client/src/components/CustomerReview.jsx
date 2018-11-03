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
                <div class="a-section celwidget">
                    <div class="a-profile-avatar-wrapper">
                        <div class="a-profile-avatar"><img src="https://s3-us-west-1.amazonaws.com/customer-review-images/avatar.png"></img></div>
                        <div class="a-profile-content">{this.state.info.customer_username}</div>
                    </div>
                    <div class="a-icon-alt">{this.state.info.rating} out of 5 stars</div>
                    <div class="a-size-base a-link-normal review-title a-color-base a-text-bold">{this.state.info.title}</div>
                    <div class="a-size-base a-color-secondary review-date">{moment(this.state.info.review_date).format('ll')}</div>
                    <div class="a-color-secondary">version: {this.state.info.product_version}</div>
                    <div class="a-expander-content a-expander-partial-collapse-content">{this.state.info.body}</div>
                    <ReviewImages reviewId={this.state.info.id} />
                    <div class="a-size-base a-color-tertiary cr-vote-text">{this.state.info.helpful_count} people found this helpful</div>
                    <button class="a-button-input">Helpful</button><button class="a-button-input">Not Helpful</button>
                    <div class="a-size-base a-link-normal a-color-secondary a-text-normal">| Comment | Report abuse</div>
                </div>
            </div>
            )
            }
        else
                return null;
    }
}

export default CustomerReview;