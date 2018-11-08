import React from 'react';
import getImages from '../api/getImages.js';

class ReviewImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : []
        };
    }

    componentWillMount() {
        getImages(this.props.reviewId)
            .then(data => {
                this.setState({ images : data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {        
            if (this.state.images !== undefined) {
                return (
                    <div class="gallery">
                        {this.state.images.map((image, i) =>
                            <div class="image">
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
                return null;
    }
}

export default ReviewImages;