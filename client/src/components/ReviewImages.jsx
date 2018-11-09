import React from 'react';
import getImages from '../api/getImages.js';

class ReviewImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : []
        };
    }

    componentDidMount() {
        if(this.props.reviewId !== undefined) {
            getImages(this.props.reviewId)
            .then(data => {
                this.setState({ images : data });
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    render() {        
            if (this.state.images.length !== 0 ) {
                return (
                    <div className="gallery">
                        {this.state.images.map((image, i) =>
                            <div className="image" key={i}>
                                <img key={i}
                                    alt="review image" 
                                    src={image.location_url}
                                    height="88" 
                                    width="130" />
                            </div>
                            )
                        }
                    </div>
                )
            }
            else
                return <span></span>
    }
}

export default ReviewImages;