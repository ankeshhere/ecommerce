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
  return {
    props: { collection: v.items, products: fff }
  }
}

import React, { useEffect, useState } from 'react'
import Product from 'components/Product'
import { Select, Space } from 'antd'
import { FilterFilled } from '@ant-design/icons'
export default function Collection({ collection, products }) {
  console.log("PPP", products);
  var collectionData = collection[0]
  const [windowsize, setwindowsize] = useState(0)
  useEffect(() => {
    setwindowsize(window.innerWidth)
  })
  const handleChange = value => {
    console.log(`selected ${value}`)
  }


  return (
    <>
      {' '}
      <div className='container bcrumb d-flex flex-column align-items-center justify-content-center mt-3'>
        <a href='' style={{ fontSize: 13 }}>Home /</a>
        <a
          href=''
          style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}
        >
          {collectionData.fields.collectionName}
        </a>
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
            <div className='col-md-3 px-0'>
              <Select
                style={{
                  width: '100%',
                  border: '1px solid black',
                  marginBottom: 20
                }}
                defaultValue='Sort'
                width={'100%'}
                onChange={handleChange}
                suffixIcon={<FilterFilled style={{ color: "#000" }} />}
                options={[
                  {
                    value: 'Alpha-a-z',
                    label: 'Alphabetical A-Z'
                  },
                  {
                    value: 'Alpha-z-a',
                    label: 'Alphabetical Z-A'
                  },
                  {
                    value: 'Price-high-low',
                    label: 'Price - High to Llow'
                  },
                  {
                    value: 'Price-low-high',
                    label: 'Price - Low to High'
                  }
                ]}
              />
            </div>
            <div className='col-md-3 px-0 filt'>
              <Select
                style={{
                  width: '100%',
                  border: '1px solid black',
                  marginBottom: 20
                }}
                defaultValue='Filter'
                width={'100%'}
                onChange={handleChange}
                suffixIcon={<FilterFilled style={{ color: "#000" }} />}
                options={[
                  {
                    value: 'Alpha-a-z',
                    label: 'Alphabetical A-Z'
                  },
                  {
                    value: 'Alpha-z-a',
                    label: 'Alphabetical Z-A'
                  },
                  {
                    value: 'Price-high-low',
                    label: 'Price - High to Llow'
                  },
                  {
                    value: 'Price-low-high',
                    label: 'Price - Low to High'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {
            products.length > 0 &&
            products.map((item,idx) => {
              return (<Product item={item} key={idx}/>)
            })
          }
        </div>
      </div>
    </>
  )
}
