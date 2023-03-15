import { createClient } from 'contentful'
import React, { useEffect, useState } from 'react'

export default function Promo() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_TOKEN_ID || ''
  })
  const [promo, setpromo] = useState()
  async function getpromo() {
    const v = await client.getEntries({
      content_type: 'discount',
    })

    setpromo(v.items[0].fields.discountData)
  }
  useEffect(() => {
    getpromo()
    return () => {

    };
  }, []);
  console.log("VV", promo)
  return (promo &&
    <div className='promo'>
      <span dangerouslySetInnerHTML={{__html:promo}}></span>
    </div>
  )
}
