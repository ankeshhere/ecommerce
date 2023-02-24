import React from 'react'

export default function Product() {
    return (
        <div className='col-lg-3 col-md-3 col-6 mb-2'>
            <a className='card-l' href='222'>
                <div className='card' style={{ border: 0 }}>
                    <div className='card-image'>
                        <div className='wrap'>
                            <img
                                className='img-fluid imx'
                                src='https://cdn.shopify.com/s/files/1/0581/9383/8255/products/20230215_103945702_iOS_360x.jpg?v=1676621472'
                                alt='image 1'
                            />
                        </div>
                    </div>
                    <div className='card-content bg-light text-dark text-center'>
                        <span className='ct'>
                            WATERMELON SUGAR RUFFLE BEACH TOTE BAG
                        </span>
                        <p className='price'>Rs. 1,999</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
