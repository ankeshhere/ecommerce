import { createClient } from 'contentful'
// export async function getStaticPaths () {
//   return {
//     paths: [],
//     fallback: 'blocking' 
//   }
// }
export async function getServerSideProps(context) {
  console.log('ID ', context.params.id)
  const client = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.TOKEN_ID || ''
  })
  //   let vid = capitalizeFirstLetter(context.params.id).replaceAll('-', ' ')
  const v = await client.getEntries({
    content_type: 'product',
    'fields.slug': context.params.id
  })
  return {
    props: { proddata: v.items[0].fields }
  }
}
import { StarFilled, WhatsAppOutlined } from '@ant-design/icons'
import { Divider, Rate } from 'antd'
import ImageCarousel from 'components/ImageCarousel'
import Product from 'components/Product'
import SectionHeading from 'components/SectionHeading'
import React, { useEffect, useState } from 'react'

export default function Collection({ proddata }) {
  const [windowsize, setwindowsize] = useState(0)
  useEffect(() => {
    setwindowsize(window.innerWidth)
  })
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  console.log("PD", proddata);
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <div className='container' style={{ maxWidth: 1000 }}>
          <div className='row'>
            <div className='col-md-6'>
              <ImageCarousel images={proddata.images} />
              {/* <img
                src='https://cdn.shopify.com/s/files/1/0581/9383/8255/products/CHI1372_720x.jpg?v=1625574126'
                alt=''
                style={{ width: '100%' }}
              /> */}
            </div>
            <div className='col-md-6 py-2 pcont'>
              <div className='bcrum'>Home / {proddata.collection[0].fields.collectionName} / {proddata.name}</div>
              <h4>{proddata.name}</h4>
              <div className='star'>
                <Rate disabled defaultValue={5} />
              
              </div>
              {
                proddata.inStock ? <p>Rs. {proddata.price}</p> : <p style={{ textDecoration: 'line-through' }}>Rs. {proddata.price} OUT OF STOCK</p>
              }
              <p>Rs. {proddata.price}</p>
              <span className='spa'>Inclusive of all taxes.</span>
              <div className='divider cox'></div>

              <a href='#' className='btn-order'>
                <WhatsAppOutlined style={{ marginRight: 10 }} /> Enquire on
                Whatsapp
              </a>
              {
                proddata.discount_prc && Object.keys(proddata.discount_prc).length > 0 && <div className='coup'>
                  <span>Flat {proddata.discount_prc.perc} off</span>
                  <span>
                    Use Coupon: <strong>{proddata.discount_prc.code}</strong>{' '}
                  </span>
                </div>

              }

              <p className='desc'>
                {proddata.description}
              </p>

              <div className='row d-flex justify-content-center align-items-center cc my-4'>
                <div className='col-6 sz'>Size</div>
                <div className='col-6 sz'>{proddata.size}</div>
                <div className='divider'></div>
                <div className='col-6 sz'>Colour</div>
                <div className='col-6 sz'>{proddata.color}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <SectionHeading title={'Recommened for this category'} />
        <div className='container'>
          <div className='row'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section> */}
    </>
  )
}
