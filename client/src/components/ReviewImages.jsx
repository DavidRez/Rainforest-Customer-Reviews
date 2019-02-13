import React from 'react';
import getImages from '../api/getImages.js';

class ReviewImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //hold all info for images for current review
            images : []
        };
    }

    componentDidMount() {
        // get customer review images for current review
        getImages(this.props.reviewId)
            .then(data => {
                this.setState({ images : data });
            })
    }

    render() {        
            if (this.state.images.length > 0) {
                return (
                    //create image gallery
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