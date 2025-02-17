/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Product() {
    return (
        <Link href={'/products/prod1'} className="flex flex-col justify-between bg-white border border-stone-300 rounded-lg min-h-full relative cursor-pointer hover:border-primary transition-all hover:shadow-md group">


            <div href="https://lqrs.com/brands/bushmills/" className='overflow-hidden'>
                <img className=" rounded-t-lg  w-full group-hover:scale-105 duration-150 transition-all" src="/eth1.webp" alt="Bushmills Black Bush Irish Whiskey" />
            </div>
            <div className="flex-grow p-4 items-center flex justify-center">

                <p className="sm:text-lg leading-5 sm:leading-6 text-gray-800 font-sans md:text-sm">Bushmills Black Irish
                    Whiskey</p>

            </div>
            <div className=" px-4 pb-4 items-center flex justify-center">
                <p className='font-heading font-extrabold font-primary'>INR 3,995</p>
            </div>
        </Link>
    )
}
