import { Carousel } from 'antd';
import Image from 'next/image';
import pic1 from "../public/1.webp"
import pic2 from "../public/2.webp"
import pic3 from "../public/3.webp"
import pic4 from "../public/4.webp"
import { useEffect, useRef, useState } from 'react';
const contentStyle = {
    margin: 0,
    height: '',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const SliderLayout = () => {
    // var ww = useRef([window.innerWidth, window.innerHeight]);
    const [windowSize, setwindowSize] = useState([])
    useEffect(() => {

        // setwindowSize(ww)
        // console.log(window.innerWidth)
        setwindowSize(window.innerWidth)
    }, [])


    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel autoplay>
            <div style={contentStyle}>
                <Image src={pic1} width={windowSize} height={windowSize > 400 ? 650 : windowSize} />

            </div>
            <div style={contentStyle}>
                <Image src={pic2} width={windowSize} height={windowSize > 400 ? 650 : windowSize} />

            </div>
            <div style={contentStyle}>
                <Image src={pic3} width={windowSize} height={windowSize > 400 ? 650 : windowSize} />
            </div>
            <div style={contentStyle}>
                <Image src={pic4} width={windowSize} height={windowSize > 400 ? 650 : windowSize} />
            </div>
        </Carousel>
    );
};
export default SliderLayout;