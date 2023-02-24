import React from 'react'
import Catproduct from './Catproduct'
import SectionHeading from './SectionHeading'

export default function ShopByCategory() {
  return (
    <>
      <SectionHeading title={"SHOP BY CATEGORY"} descr="Some of the categories we cater" />
      <div className="container">
        <div className="row">
          <Catproduct />
          <Catproduct />
          <Catproduct />
          
         
        </div>
      </div>
    </>
  )
}
