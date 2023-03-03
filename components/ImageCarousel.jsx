import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel autoPlay interval="2000" transitionTime="1000">
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_8054_jpg_540x.jpg?v=1652861863" />
                        {/* <p className="legend">My Classic Still 1</p> */}
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_2912_540x.jpg?v=1677134714" />
                        {/* <p className="legend">My Classic Still 2</p> */}
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_8054_jpg_540x.jpg?v=1652861863" />
                        {/* <p className="legend">My Classic Still 3</p> */}
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_2912_540x.jpg?v=1677134714" />
                        {/* <p className="legend">My Classic Still 3</p> */}
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageCarousel;