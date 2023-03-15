import { createClient } from 'contentful'
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking' // can also be true or 'blocking'
//   }
// }
export async function getServerSideProps(context) {
  // console.log('ID ', context.params.id)
  const client = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.TOKEN_ID || ''
  })
  //   let vid = capitalizeFirstLetter(context.params.id).replaceAll('-', ' ')
  const v = await client.getEntries({
    content_type: 'collection',
    'fields.slug': context.params.id
  })
  const prods = await client.getEntries({
    content_type: 'product',
  })

  const fff = prods.items.filter((item) => {
    // console.log('ii', item.fields.collection[0].fields.slug)
    return item.fields.collection[0].fields.slug == context.params.id
  })
  // console.log('FFF' ,fff);
  const subc = new Set();
  fff.forEach((item, index) => {
    if (item.fields.hasOwnProperty('subCollection'))
      subc.add(item.fields.subCollection.fields.subCollectionTitle)
  })
  return {
    props: { collection: v.items, products: fff, subc: [...subc] }
  }
}

import React, { useEffect, useState } from 'react'
import Product from 'components/Product'
import { Select, Space } from 'antd'
import { FilterFilled } from '@ant-design/icons'
import Link from 'next/link'
export default function Collection({ collection, products, subc }) {
  console.log("PPP", products);
  console.log("subc", subc);
  var collectionData = collection[0]
  const [windowsize, setwindowsize] = useState(0)
  const [subcollections, setsubcollections] = useState([])
  const letters = new Set();

  // useEffect(() => {

  //   setc()
  // }, [])

  // function setc() {

  //   products.map((item, index) => {
  //     if (item.fields.hasOwnProperty('subCollection'))
  //       letters.add(item.fields.subCollection.fields.subCollectionTitle)
  //   })
  //   // setsubcollections(letters)
  // }
  return (
    <>
      {' '}
      <div className='container bcrumb d-flex flex-column align-items-center justify-content-center mt-3'>
        <Link href='/' style={{ fontSize: 13 }}>Home /</Link>
        <Link
          href=''
          style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          {collectionData.fields.collectionName}
        </Link>
      </div>
      <div style={{ padding: 10 }}>
        <div
          className='container showcase text-center py-3'
          style={{ color: '#000' }}
        >
          <div className='row'>
            <div className='col-md-12'>
              Handcrafted & handmade products, made specially for you, by us!♥️
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <div className='container my-3 px-2'>
          <div className='row px-0'>
            <div className='col-md-12 px-0'>
              <img
                // src='https://cdn.shopify.com/s/files/1/0581/9383/8255/files/Untitled-1_0007_Layer_19_2048x2048.jpg?v=1625724047'
                src={collectionData.fields.collectionBanner.fields.file.url}
                alt=''
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <div className='container'>
          <div className='row px-0 d-flex justify-conten-between'>
            {
              subc.length > 0 && subc.map((item, index) => {
                return <div key={index}>
                  <h4
                    className='subc'
                    style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}
                  >
                    {item}
                  </h4>
                  {
                    products.map((i, idx) => {
                      const n = Math.floor(Math.random() * 100)
                      if (i.fields.hasOwnProperty('subCollection') && i.fields.subCollection.fields.subCollectionTitle == item) {
                        return <Product item={i} key={n} />
                      }
                    })
                  }
                </div>
              })
            }

          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {
            products.length > 0 &&
            products.map((item, idx) => {
              if (!item.fields.hasOwnProperty('subCollection')) {
                return <Product item={item} key={idx} />
              }
            })
          }
        </div>
      </div>
    </>
  )
}
