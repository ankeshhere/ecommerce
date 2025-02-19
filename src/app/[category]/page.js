import getCategoryCollectionsandProds, { getProductsbasedonCollection } from "@/actions/getCategoryCollectionsandProds";
import Product from "@/components/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Category({ params }) {
    const { category } = await params;
    // console.log('CA ', category);
    const collections = await getCategoryCollectionsandProds(category)
    const prods = await getProductsbasedonCollection(collections)
    console.log(prods);

    if (category == "ethnic-wear" || category == "western-wear" || category == "custom-wear") {
        return (
            <div>
                <section className="relative h-[400px] max-w-[1300px] mx-auto">
                    <Image src={'/banner2.jpg'} fill className="object-cover" alt="" />
                </section>

                <section className="max-w-[1300px] mx-auto">
                    <h2 className="text-4xl font-heading text-primary font-bold text-center my-6">{category.split('-')[0].charAt(0).toUpperCase() + category.split('-')[0].slice(1)} Wear</h2>

                    <p className="text-sm text-center text-gray-800 max-w-[700px] p-4 mx-auto">Welcome to the charming world, where little ones step into the realm of style and tradition. Manyavar, a brand celebrated for its exquisite ethnic wear, now brings an array of Indo-western, kurta jacket sets, and kurta pajamas designed exclusively for boys aged 2-14 years. This collection is a colourful playground of fashion, blending traditional elegance with playful trends, perfect for the young fashion enthusiasts.
                    </p>
                    <div className="flex justify-center my-12 flex-row max-w-[1300px] mx-auto gap-4 flex-wrap">
                        {
                            collections && collections.map((item, index) => {
                                return <Link href={''} className="border border-primary px-8 font-bold font-heading py-2 rounded-md hover:bg-primary hover:text-white   duration-150 transition-all" key={index}>{item}</Link>

                            })
                        }
                    </div>
                </section>
                <div className="h-[1px] bg-gray-800 max-w-[700px] mx-auto"></div>



                <section className="max-w-[1300px] mx-auto my-12">
                    <h3 className="text-primary font-heading font-bold text-center text-2xl  mb-4">Collection 1</h3>
                    <div className="grid gap-2 p-2 grid-cols-2 sm:grid-cols-2 lg:gap-r lg:grid-cols-5">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </section>
               
            </div>);
    }

    else {
        redirect('/')
    }
    // const

}