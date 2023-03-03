export async function getStaticPaths () {
  return {
    paths: [],
    fallback: 'blocking' // can also be true or 'blocking'
  }
}
export async function getStaticProps (context) {
  console.log('ID ', context.params.id)
  //   const client = createClient({
  //     space: process.env.SPACE_ID || '',
  //     accessToken: process.env.TOKEN_ID || ''
  //   })
  //   let vid = capitalizeFirstLetter(context.params.id).replaceAll('-', ' ')
  //   const v = await client.getEntries({
  //     content_type: 'category',
  //     'fields.categoryTitle': vid
  //   })
  return {
    props: { id: context.params.id }
  }
}
import { StarFilled, WhatsAppOutlined } from '@ant-design/icons'
import { Divider, Rate } from 'antd'
import ImageCarousel from 'components/ImageCarousel'
import Product from 'components/Product'
import SectionHeading from 'components/SectionHeading'
import React, { useEffect, useState } from 'react'

export default function Collection ({ id }) {
  const [windowsize, setwindowsize] = useState(0)
  useEffect(() => {
    setwindowsize(window.innerWidth)
  })
  const handleChange = value => {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <div className='container' style={{ maxWidth: 1000 }}>
          <div className='row'>
            <div className='col-md-6'>
              <ImageCarousel />
              {/* <img
                src='https://cdn.shopify.com/s/files/1/0581/9383/8255/products/CHI1372_720x.jpg?v=1625574126'
                alt=''
                style={{ width: '100%' }}
              /> */}
            </div>
            <div className='col-md-6 py-2 pcont'>
              <div className='bcrum'>Home / Fearless & Bold Handbags</div>
              <h4>BURNT ORANGE CHECKS HANDBAG</h4>
              <div className='star'>
                <Rate disabled defaultValue={5} />
                {/* <StarFilled style={{color:"#7c2325",paddingRight:4}}/>
                <StarFilled style={{color:"#7c2325",paddingRight:4}}/>
                <StarFilled style={{color:"#7c2325",paddingRight:4}}/>
                <StarFilled style={{color:"#7c2325",paddingRight:4}}/>
                <StarFilled style={{color:"#7c2325",paddingRight:4}}/> */}
              </div>
              <p>Rs. 2,399.00</p>
              <span className='spa'>Inclusive of all taxes.</span>
              <div className='divider cox'></div>

              <a href='#' className='btn-order'>
                <WhatsAppOutlined style={{ marginRight: 10 }} /> Enquire on
                Whatsapp
              </a>
              <div className='coup'>
                <span>Flat 10% off</span>
                <span>
                  Use Coupon: <strong>SHUBV200</strong>{' '}
                </span>
              </div>
              <p className='desc'>
                To all you women out there, be bold & be fearless. And while you
                do this bag is the perfect bag that you’ll be wanting to keep
                besides you to remind you of that every single day.<br></br>
                <br></br> Made from the finest weaves of cotton, this handbag is
                a perfect combination of a classic & a stylish bag. Comes with
                adjustable belts, two partitions inside the bag and a back
                pocket.
              </p>

              <div className='row d-flex justify-content-center align-items-center cc my-4'>
                <div className='col-6 sz'>Size</div>
                <div className='col-6 sz'>218”(w)x14”(h)x5”(b)22</div>
                <div className='divider'></div>
                <div className='col-6 sz'>Colour</div>
                <div className='col-6 sz'>Burnt orange</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <SectionHeading title={'Recommened for this category'} />
        <div className='container'>
          <div className='row'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </>
  )
}
