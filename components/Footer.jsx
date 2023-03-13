import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

export default function Footer () {
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
              <a href=''>Terms of Service</a>
              <Link href='/shipping-policy'>Shipping Policy</Link>
              <a href=''>Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-2 pb-4 my-4">
            <h4>SOCIAL</h4>
            <div>
              <FacebookFilled size={22} style={{color:'#fff',fontSize:32,paddingRight:10,cursor:'pointer'}} />
              <InstagramFilled size={22} style={{color:'#fff',fontSize:32, paddingRight:10,cursor:'pointer'}}/>
              <LinkedinFilled size={22} style={{color:'#fff',fontSize:32, paddingRight:10,cursor:'pointer'}}/>
            </div>
          </div>
        </div>
      </div>
      <p className='footer-content'>Shubvastram is a lifestyle accessory brand based in Ahmedabad, Gujarat, INDIA. We make, Handbags, Box Bags, Three-Pocket Jacquard Bags, Tote Bags, Sling Bags, Duffle Bags, Travel Bags, Two-Pocket Jacquard Bags, Cross Body Bags, Backpack, Wallets & Compact Wallets, Baguette Bags, Fearless and Bold Handbags, Pouches, Laptop Bags & Sleeves, Sunglasses Cases & Passport Covers, Clothing, and Footwear. You can also check out our exclusive collections like Go Social, Get-Set-Glam Belts, Diaries, and Tassels. Our products are handcrafted by local artisans from the finest weaves of cotton and jute. The products are designed keeping in mind the aesthetics and versatility that lie in cotton & jute and the fine woven textures we have inherited with. Many people also choose our products for gifts for Weddings, Anniversaries, Diwali, Holi, Christmas, New Year, Karwa Chauth, Valentine's Day, and Women's Day. We use minimal vegan leather instead of animal leather.</p>

      <h4 className='footer-c'>© 2023 Shubvastram </h4>
    </section>
  )
}
