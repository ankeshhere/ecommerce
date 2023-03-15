import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Footer () {
  const router = useRouter()
  return (
    <section className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 my-4'>
            <h4>MAIN MENU</h4>
            <div className='footer-holder'>
              <a href=''>About Us</a>
              <a href=''>BestSellers</a>
              <a href=''>New Arrivals</a>
              <a href=''>Discounts / Coupons </a>
            </div>
          </div>
          <div className='col-md-4 my-4'>
            <h4>SHUBVASTRAM</h4>
            <div className='footer-holder'>
              <a href=''>Air Base Colony, Ramnagar, Kadma, Jamshedpur, Jharkhand 831005.</a><br></br>
              <a href=''>Reach out to us on :- +919667656804 or shubhvastram.official@gmail.com</a>
              <a href=''>Monday to Saturday :- 10:00 AM to 7:00 PM</a>
            </div>
          </div>
          <div className='col-md-3 my-4'>
            <h4>POLICIES</h4>
            <div className='footer-holder'>
              <a href=''>FAQs</a>
              <Link href='/return-exchange-policy'>Initiate Return/ Exchange</Link>
              {/* <a href=''>Return Policy</a> */}
              <a href='/terms-and-condition'>Terms of Service</a>
              <Link href='/shipping-policy'>Shipping Policy</Link>
              <a href=''>Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-2 pb-4 my-4">
            <h4>SOCIAL</h4>
            <div>
              <FacebookFilled size={22} style={{color:'#fff',fontSize:32,paddingRight:10,cursor:'pointer'}} onClick={()=>router.push('https://www.facebook.com/shubhvastram.official')}/>
              <InstagramFilled size={22} style={{color:'#fff',fontSize:32, paddingRight:10,cursor:'pointer'}} onClick={()=>router.push('https://instagram.com/shubhvastram.official?igshid=YmMyMTA2M2Y=')}/>
              <LinkedinFilled size={22} style={{color:'#fff',fontSize:32, paddingRight:10,cursor:'pointer'}} onClick={()=>router.push('https://www.linkedin.com/company/shubhvastram/')}/>
            </div>
          </div>
        </div>
      </div>
      <p className='footer-content'>Shubhvastram is an Indian clothing brand based in Jamshedpur, Jharkhand, INDIA.  We create ethnic and comfortable clothes with a pinch of traditional touch. We are a clothing label that specializes in Ethnic and customizable wear. We also create western wear, including tops, dresses, jumpsuits, coordinated sets, etc.</p>

      <h4 className='footer-c'>© 2023 Shubvastram </h4>
    </section>
  )
}
