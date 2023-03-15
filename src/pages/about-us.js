import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import headAbout1 from './././../../public/about1.jpg'
import headAbout2 from './././../../public/about2.jpg'
export default function About() {
  const [windowsize, setwindowsize] = useState(0)
  useEffect(() => {
    setwindowsize(window.innerWidth)
  })

  return (

    <div className='container bg-white' style={{maxWidth:1200}}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='i'></div>
          {/* <Image
            alt='Mountains'
            src={headAbout1}
            width={1324}
          /> */}
        </div>
      </div>
      <div className='row bg-white'>
        <div className='col-md-12'>
          <p className='aboutc' >Hi, I’m Saloni Agarwal, a designer based in Jamshedpur, India. I completed my diploma in fashion from D.B.M.S. Career Academy and graduated from JVWU, Jaipur. My passion and creativity for designing led to the incorporation of SHUBHVASTRAM.</p>
        </div>

      </div>
      <div className='row mt-3'>
        <div className='col-md-12'>
          <div className='i2'></div>
          {/* <Image
            alt='Mountains'
            src={headAbout1}
            width={1324}
          /> */}
        </div>

        <div className='col-md-12'>
          <p className='aboutc px-3 mt-3'>Shubhvastram is a women-led homegrown Indian clothing brand based in Jamshedpur. The word "SHUBH" means Lucky and "VASTRAM" means Clothes, together forming Shubhvastram.</p><br></br>

          <p className='aboutc px-3 '>At Shubhvastram, we don't just provide clothing, we provide a lifestyle. We believe in helping people achieve their own unique sense of style. We believe that fashion should be accessible to everyone, regardless of their budget. That's why we strive to provide high-quality clothing at an affordable price. Handcrafted just for you with loads of love.</p>
          <p className='aboutc py-3 px-3 '>The brand prioritizes ethical and sustainable production practices to support local artisans and minimize its environmental impact by up-cycling leftover fabrics into new accessories, decor, hamper items, etc.</p>
        </div>
      </div>
    </div>



  )
}
