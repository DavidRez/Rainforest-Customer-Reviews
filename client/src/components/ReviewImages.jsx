import React from 'react';
import getImages from '../api/images.js';
import 'whatwg-fetch';

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
                    <div id="R13QLACX1TLA48_imageSection_main" class="a-section a-spacing-medium review-image-container">
                        <div class="review-image-tile-section " data-reviewid="R13QLACX1TLA48">
                            {this.state.images.map((image, i) =>
                                <img key={i}
                                    alt="review image" 
                                    src={image.location_url} data-hook="review-image-tile" 
                                    class="review-image-tile" 
                                    height="88" 
                                    width="130" 
                                    data-src={image.location_url} />  
                            )}
                        </div>
                        {/* <div style="display:none;">
                            <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;R13QLACX1TLA48_gallerySection_main&quot;}">
                            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                                <i class="a-icon a-icon-popover"></i>
                            </a></span>
                        </div> */}
                    </div>
                )
            }
            else
                return null;
    }
}

export default ReviewImages;