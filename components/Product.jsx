import Link from 'next/link'
import React from 'react'

export default function Product({ item }) {
    return (
        <div className='col-lg-3 col-md-3 col-6 mb-2'>
            <Link className='card-l' href={`/products/${item.fields.slug}`}>
                <div className='card' style={{ border: 0 }}>
                    <div className='card-image'>
                        <div className='wrap'>
                            <img
                                className='img-fluid imx'
                                src={item.fields.images[0].fields.file.url}
                                alt='image 1'
                            />
                        </div>
                    </div>
                    <div className='card-content bg-light text-dark text-center'>
                        <span className='ct'>
                            {item.fields.name}
                        </span>
                        <p className='price'>Rs. {item.fields.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
