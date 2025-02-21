/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Showdown from 'showdown'
import getProductDetails from "@/actions/getProductDetails";
import Loading from "@/components/loading";
import NotFound from "@/components/notFound";
import firstUppercase from "@/utils/uppercase";
import formatRupee from "@/utils/toRupee";
import Link from "next/link";
export default function Product({ params }) {
    const { id } = React.use(params);
    var converter = new Showdown.Converter()
    const [productDetails, setProductDetails] = useState();
    const [isLoading, setIsloading] = useState(true)
    const [baseurl, setbaseurl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await getProductDetails(id)
            setProductDetails(...response)
            setIsloading(false)
            setbaseurl(window.location.origin)
        }
        fetchData();
    }, [])

    console.log("PP ", productDetails);


    function changeImage(src) {
        document.getElementById('mainImage').src = src;
    }
    if (isLoading) return <div className="flex items-center justify-center h-screen "><Loading /></div>


    return productDetails != null ? <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                    {

                    }
                    <img src={productDetails.fields.images[0].fields.file.url} alt="Product"
                        className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
                    <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                        {
                            productDetails.fields.images.length > 0 && productDetails.fields.images.map((item, idx) => {
                                return <img key={idx} src={item.fields.file.url} alt="Thumbnail 1"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={(event) => changeImage(event.target.src)} />
                            })
                        }

                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-3xl font-bold mb-2">{firstUppercase(productDetails.fields.productName)}</h2>
                    <p className="text-gray-600 mb-4">{productDetails.fields.collectionReference.fields.collectionName}</p>
                    <div className="mb-4">
                        <span className="text-2xl font-bold mr-2">₹ {formatRupee(productDetails.fields.price)}</span>
                      
                    </div>
                    {/* <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="size-6 text-yellow-500">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                    </div> */}
                    <div className='text-gray-700 mb-6' dangerouslySetInnerHTML={{ __html: converter.makeHtml(productDetails.fields.description.content[0].content[0].value) }}>

                    </div>
                    {/* <p className="text-gray-700 mb-6">{productDetails.fields.description.content[0].content[0].value}</p> */}

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">SIZES:</h3>
                        <div className="flex space-x-2 font-bold">
                            {
                                productDetails.fields.sizes.split(',').map((item, idx) => {
                                    return (<button key={idx}
                                        className="w-12 h-12 p-2 bg-gray-200 rounded-full ">
                                        {item}
                                    </button>)
                                })
                            }

                        </div>
                    </div>

                    <div className="block md:flex space-y-4 md:space-y-0 md:space-x-4 mb-6">
                        <Link href={`https://wa.me/919667656804?text=I'm%20interested%20in%20your%20product%20${baseurl}/products/${productDetails.fields.slug}`}
                            className="bg-green-600 justify-center flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-800 focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552"><defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#57d163" /><stop offset="1" stopColor="#23b33a" /></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="3.531" /></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)" /><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" /><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" /><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" /><path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" /></svg>
                            ENQUIRE ON WHATSAPP
                        </Link>
                        <Link href={'tel:919667656804'}
                            className="bg-gray-200 flex gap-2 justify-center items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>

                            CALL US
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div> : <NotFound />

}