import Link from 'next/link'
import React from 'react'

export default function Catproduct({ category }) {
    
    return (
        <div className="col-lg-4 col-6 cat my-2">
            <div className='card' style={{ border: 0, backgroundColor: 'transparent' }}>
                <div className='card-image'>
                    <div className='wrap'>
                        <img
                            className='img-fluid imx'
                            // src='https://cdn.shopify.com/s/files/1/0581/9383/8255/collections/20210705_094746000_iOS_2_540x.png?v=1625498387'
                            src={category.collectionImage.fields.file.url}
                            alt='image 1'
                        />
                    </div>
                    <Link href={`/collections/${category.slug}`}>
                        <div className="main-text">
                            {category.collectionName}
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
