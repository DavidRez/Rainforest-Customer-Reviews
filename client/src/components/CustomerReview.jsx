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

    componentDidMount() {
        this.setState({info : this.props.info});
    }

    render() {
        if(this.state.info !== undefined) {
            return (
            <div className="review">
                <div className="user">
                    <div className="avatar"><img src="https://s3-us-west-1.amazonaws.com/customer-review-images/avatar.png"></img></div>
                    <div className="username">{this.state.info.customer_username}</div>
                </div>
                <div className="rating_title_box">
                    <div className="stars">{this.state.info.rating} out of 5 stars | </div>
                    <div className="title">{this.state.info.title}</div>
                </div>
                <div className="date">{moment(this.state.info.review_date).format('ll')}</div>
                <div className="version">version: {this.state.info.product_version}</div>
                <div className="text">{this.state.info.body}</div>
                <ReviewImages reviewId={this.state.info.id} />
                <div className="bottom_box">
                    <div className="helpful">{this.state.info.helpful_count} people found this helpful</div>
                    <button className="helpful-button">Helpful</button>
                    <div className="buttons">| Comment | Report abuse</div>
                </div>
            </div>
            )
            }
        else
                return null;
    }
}

export default CustomerReview;