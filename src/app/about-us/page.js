import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default async function About() {
    return <section className="pt-10 overflow-hidden bg-gray-50  md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">

                <div>
                    <h2 className="text-3xl font-bold leading-tight text-black  sm:text-4xl lg:text-5xl">Hey 👋 I
                        am
                        <br className="block sm:hidden" /> Saloni Kejriwal
                    </h2>
                    <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8">
                        Shubhvastram is a women-led homegrown Indian clothing brand based in Jamshedpur. The word &ldquo;SHUBH&ldquo; means Lucky and &ldquo;VASTRAM&ldquo; means Clothes, together forming Shubhvastram.
                    </p>
                    <p className='max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8'>At Shubhvastram, we don&lsquo;t just provide clothing, we provide a lifestyle. We believe in helping people achieve their own unique sense of style. We believe that fashion should be accessible to everyone, regardless of their budget. That&lsquo;s why we strive to provide high-quality clothing at an affordable price. Handcrafted just for you with loads of love.</p>
                    <p className='max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8'>The brand prioritizes ethical and sustainable production practices to support local artisans and minimize its environmental impact by up-cycling leftover fabrics into new accessories, decor, hamper items, etc.</p>
                    <p className="font-bold mt-4">Follow me -</p>
                    <ul className="flex mt-5 space-x-5 mb-12">
                        <li>
                            <Link href="https://www.facebook.com/shubhvastram.official" className="text-gray-500 hover:text-primary">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/shubhvastram.official" className="text-gray-500 hover:text-primary">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 hover:text-primary" aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-10 h-10">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className="relative">
                    <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                    <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                </div>

            </div>
        </div>
    </section>
}