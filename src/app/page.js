/* eslint-disable @next/next/no-img-element */
import Product from "@/components/product";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[#ab4849] p-2 flex items-center justify-center text-sm font-heading text-white font-bold">
        <p>Free Delivery on Orders above Rs. 999</p>
      </div>
      <div className="relative max-w-[1300px] mx-auto h-[400px]">
        <Image src={'/banner2.jpg'} fill
          className="object-cover"
          priority alt="Banner" />
      </div>

      <div className="max-w-[1300px] mx-auto">


        <h2 className="font-heading text-4xl font-bold flex items-center justify-center my-8 text-primary">New Arrivals</h2>
        <div className="grid gap-2 p-2 grid-cols-2 sm:grid-cols-2 lg:gap-r lg:grid-cols-5">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <section className="max-w-[1300px] mx-auto">

        <div className="container mx-auto px-4 py-8">
          <h3 className="font-heading text-4xl font-bold flex items-center justify-center my-8 text-primary">Shop By Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-4 md:gap-0 md:gap-x-4 ">
            <Link href={'/ethnic-wear'} className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="/ethnic.jpg" alt="Nature" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Explore Ethnic Wear</h3>
                  <p className="text-white">Discover the beauty of the traditional wear</p>
                </div>
              </div>
            </Link >

            <Link href={'/western-wear'} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="/western.jpeg" alt="Western" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Explore Western Wear</h4>
                  <p className="text-white">Discover the beauty of the Western wear</p>
                </div>
              </div>
            </Link>

            <Link  href={'/custom-wear'} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="/custom.jpeg" alt="Travel" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Explore Customised Wear</h4>
                  <p className="text-white">Discover the beauty of the Custom wear</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </section >


      <section className="max-w-[1300px] mx-auto">
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-primary font-heading">What We Do</h2>
          <p className="mb-12 text-lg text-gray-500">Here is a few of the services we provide</p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-800 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-red-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                      decentralized network that combines a smart contract and a frontend user interface.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-zinc-300 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                      focus on understanding and analyzing data to provide a semantic web.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                      to assess the extent up to which project management standards are being upheld.</p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                      defenses and exploiting weaknesses in a computer system or network.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                      that eliminate a large amount of manual work and accelerate the development process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >

  );
}
