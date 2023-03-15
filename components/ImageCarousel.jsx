import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function ImageCarousel({ images }) {
    return (
        <div>
            <Carousel autoPlay interval="2000" transitionTime="1000" preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
                {
                    images.map((item, idx) => {
                        return <div key={idx}>
                            <img src={item.fields.file.url} />
                            {/* <p className="legend">My Classic Still 1</p> */}
                        </div>
                    })
                }
                {/* <div>
                    <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_8054_jpg_540x.jpg?v=1652861863" />
                    <p className="legend">My Classic Still 1</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_2912_540x.jpg?v=1677134714" />
                    <p className="legend">My Classic Still 2</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_8054_jpg_540x.jpg?v=1652861863" />
                    <p className="legend">My Classic Still 3</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0581/9383/8255/products/IMG_2912_540x.jpg?v=1677134714" />
                    <p className="legend">My Classic Still 3</p>
                </div> */}
            </Carousel>
        </div>
    );
}