import { SearchOutlined, MenuOutlined, CloseOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons'
import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import profilePic from '../public/logo_f.jpg'
import { Drawer, Space } from 'antd'
import MenuComponent from './MenuComponent'
import DrawerFooter from './DrawerFooter'
import { createClient } from 'contentful'
import Link from 'next/link'
import Promo from './Promo'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [collNav, setColl] = useState([])
  // const [oromo, setpromo] = useState()

  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_TOKEN_ID || ''
  })
  async function getCollections() {
    const v = await client.getEntries({
      content_type: 'collection',
    })
    setColl(v.items.reverse())
  }
  

  useEffect(() => {
    // console.log('render');
    getCollections()
   
  }, [])
  // console.log('collNav ',collNav);
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className='header px-3'>
        <nav className='row pc-header'>
          <div className='col-md-3'>
            <Link href={'/'}><Image
              src={profilePic}
              alt='Picture of the author'
              width={250}
              height={90}
            /></Link>

          </div>
          <div className='col-md-7 d-flex justify-content-center align-items-center'>
            <ul className='cf d-flex justify-content-center'>
              <li>
                <a className='dropdown' href='#'>
                  CLOTHINGS
                </a>
                <ul>
                  {

                    // collNav.length > 0 && collNav.map((i, idnex) => {

                    //   if (i.fields.categoryName.fields.categoryName == "CLOTHING") {
                    //     // console.log("II",i)
                    //     return <Link key={idnex} href={`/collections/${i.fields.slug}`}>{i.fields.collectionName}</Link>
                    //   }
                    //   return null;
                    // })
                  }
                  {/* <a href='#'>Indian</a>

                  <a href='#'>Western</a>

                  <a href='#'>Customized</a> */}
                </ul>
              </li>
              <li>
                <a className='dropdown' href='#'>
                  WEDDING ESSENTIALS
                </a>
                <ul>
                  {

                    collNav.length > 0 && collNav.map((i, idnex) => {

                      if (i.fields.categoryName.fields.categoryName == "WEDDING ESSENTIALS") {
                        // console.log("II",i)
                        return <Link key={idnex} href={`/collections/${i.fields.slug}`}>{i.fields.collectionName}</Link>
                      }
                      return null;
                    })
                  }

                </ul>
              </li>
              <li>
                <a className='dropdown' href='#'>
                  ACCESSORIES
                </a>
                <ul>
                  {

                    collNav.length > 0 && collNav.map((i, idnex) => {

                      if (i.fields.categoryName.fields.categoryName == "ACCESSORIES") {
                        // console.log("II",i)
                        return <Link key={idnex} href={`/collections/${i.fields.slug}`}>{i.fields.collectionName}</Link>
                      }
                      return null;
                    })
                  }
                </ul>
              </li>
              <li>
                <Link href='/about-us' className='dropdown'>
                  OUR STORY
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-md-2 d-flex justify-content-end align-items-center'>
            <div
              className='controls d-flex justify-content-center align-items-center '
              style={{ paddingRight: 10 }}
            >
              <SearchOutlined
                style={{ fontSize: 20, padding: 10, cursor: 'pointer' }}
              />
              <div style={{ backgroundColor: '#f2dade', borderRadius: 25 }}>
                <ShoppingCartOutlined
                  style={{
                    fontSize: 21,
                    paddingLeft: 15,
                    paddingRight: 15,
                    cursor: 'pointer',
                    paddingTop: 15,
                    paddingBottom: 15
                  }}
                />
              </div>
            </div>
          </div>
        </nav>
        <nav className='mob-header d-flex align-items-center justify-content-between py-3'>
          <div className=''>
            <Image src={profilePic} width={120} height={60} />
          </div>
          <div className='col-md-7 d-flex align-items-center'>
            <div>
              <SearchOutlined
                style={{ fontSize: 22, padding: 10, cursor: 'pointer' }}
              />
            </div>

            <div>
              <MenuOutlined
                style={{ fontSize: 22, padding: 10, cursor: 'pointer' }}
                onClick={showDrawer}
              />
            </div>
            <div >
              <ShoppingCartOutlined
                style={{ fontSize: 22, padding: 10, cursor: 'pointer' }}
              />
            </div>
          </div>
        </nav>
      </div>
      <Drawer

        closeIcon={null}
        destroyOnClose={true}
        // closable={false}
        placement='right'
        onClose={onClose}
        open={open}
        width={270}
        style={{ backgroundColor: "#f2dade", padding: 0 }}
        footer={<DrawerFooter />}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} />
          </Space>
        }
      >
        <MenuComponent collNav={collNav} onClose={onClose} />


        <div style={{ padding: 25, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Link onClick={onClose} href='/about-us' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Our Story</Link>
          {/* <Link href='' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Bestsellers</Link> */}
          <Link onClick={onClose} href='/terms-and-condition' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Terms and Conditions</Link>
          <Link onClick={onClose} href='/shipping-policy' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Shipping Policy</Link>
          <Link onClick={onClose} href='/privacy-policy' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Privacy Policy</Link>
          <Link onClick={onClose} href='/return-exchange-policy' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Return/Exchange Policy</Link>
          {/* <Link href='' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Contact Us</Link> */}
          {/* <Link href='' style={{ color: "#7c2325", textDecoration: 'none', padding: 5 }}>Login</Link> */}
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 p-2 d-flex justify-content-center align-items-center" ><FacebookFilled style={{ color: "#7c2325", fontSize: 30 }} onClick={() => router.push('https://www.facebook.com/shubhvastram.official')} /></div>
            <div className="col-6 p-2 d-flex justify-content-center align-items-center" ><InstagramFilled style={{ color: "#7c2325", fontSize: 30 }} onClick={() => router.push('https://www.facebook.com/shubhvastram.official')} /></div>
            {/* <div className="col-6 p-2" >Pintrest</div> */}
            <div className="col-6 p-2 d-flex justify-content-center align-items-center" ><LinkedinFilled style={{ color: "#7c2325", fontSize: 30 }} onClick={() => router.push('https://www.linkedin.com/company/shubhvastram/')} /></div>
          </div>
        </div>
      </Drawer>
      <Promo />
    </>
  )
}
