import React from 'react'
import Catproduct from './Catproduct'
import SectionHeading from './SectionHeading'

export default function ShopByCategory({ collection }) {
  return (
    <>
      <SectionHeading title={"SHOP BY CATEGORY"} descr="Some of the categories we cater" />
      <div className="container">
        <div className="row">
          {
            collection.map((item,index) => {
              return <Catproduct category={item.fields} key={index}/>
            })
          }
        </div>
      </div>
    </>
  )
}
