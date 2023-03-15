import React from 'react'
import Product from './Product'
import SectionHeading from './SectionHeading'

export default function NewArrivals({ prods }) {
  return (
    <div id='nv'>
      <div className='divider' id='nv'></div>
      <SectionHeading title="NEW ARRIVALS" descr="Shop with the latest trends for fashion" id='#nv'/>
      <div className='container' id='nv'>
        <div className='row'>
          {
            prods.map((item, index) => {
              return <Product item={item} key={index} />
            })
          }
          {/* <Product />
          <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </div>
  )
}
