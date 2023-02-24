import React from 'react'
import Product from './Product'
import SectionHeading from './SectionHeading'

export default function NewArrivals () {
  return (
    <>
      <div className='divider'></div>
      <SectionHeading title="NEW ARRIVALS" descr="Shop with the latest trends for fashion" />
      <div className='container'>
        <div className='row'>
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
        </div>
      </div>
    </>
  )
}
