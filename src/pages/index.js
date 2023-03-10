
import NewArrivals from 'components/NewArrivals'
import ShopByCategory from 'components/ShopByCategory'
import SliderLayout from 'components/SliderLayout'
import React from 'react'
import { createClient } from 'contentful'
// export async function getStaticPaths () {
//   return {
//     paths: [],
//     fallback: 'blocking', // can also be true or 'blocking'
//   }
// }
export async function getServerSideProps(context) {
  // console.log('SPACE_ID ', process.env.SPACE_ID)
  // console.log('accessToken ', process.env.TOKEN_ID)
  const client = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.TOKEN_ID || ''
  })
  // let vid = capitalizeFirstLetter(context.params.id).replaceAll('-', ' ')
  // const v = await client.getEntries({
  //   content_type: 'location',
  //   'fields.locationName': vid
  // })
  const v = await client.getEntries({ content_type: 'collection' })
  
  // console.log('res ', v.items)
  return {
    props: { collection: v.items },
  }
}
// export async function getStaticProps () {
// }

export default function Home({collection}) {
  
  return (
    <>
     
      <SliderLayout />
      <NewArrivals />
      <ShopByCategory collection={collection}/>
    </>
  )
}
