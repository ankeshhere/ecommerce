import getCategoryCollections from "@/actions/getCategoryCollectionsandProds";
import { getProductsbasedonCollection } from "@/actions/getCategoryCollectionsandProds";
import getCategoryData from "@/actions/getCategoryData";
import NotFound from "@/components/notFound";
import Product from "@/components/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Category({ params }) {
    const { category } = await params;
    // console.log('CA ', category);
    const categoryData = await getCategoryData(category)
    const collections = await getCategoryCollections(category)
    const prods = await getProductsbasedonCollection(collections)
    // console.log(categoryData);
    // console.log(prods);
    // const r =
    // console.log("S", r);
    
    if (category == "ethnic-wear" || category == "western-wear" || category == "custom-wear") {
        if(categoryData.length>0){
            return (
                <div>
                    <section className="relative h-[400px] max-w-[1300px] mx-auto">
                        <Image src={"https:" + categoryData[0].fields.categoryBannerMobile.fields.file.url} fill className="object-cover md:hidden" alt="" />
                        <Image src={"https:" + categoryData[0].fields.categoryBannerPc.fields.file.url} fill className="object-cover hidden md:block" alt="" />
                    </section>
    
                    <section className="max-w-[1300px] mx-auto">
                        <h2 className="text-4xl font-heading text-primary font-bold text-center my-6">{category.split('-')[0].charAt(0).toUpperCase() + category.split('-')[0].slice(1)} Wear</h2>
    
                        <p className="text-sm text-center text-gray-800 max-w-[700px] p-4 mx-auto">{categoryData[0].fields.description}
                        </p>
                        <div className="flex justify-center my-12 flex-row max-w-[1300px] mx-auto gap-4 flex-wrap">
                            {
                                collections && collections.map((item, index) => {
                                    return <Link href={'#' + item.split(' ').join('-')} className="border border-primary px-8 font-bold font-heading py-2 rounded-md hover:bg-primary hover:text-white   duration-150 transition-all" key={index}>{item}</Link>
    
                                })
                            }
                        </div>
                    </section>
                    <div className="h-[1px] bg-gray-800 max-w-[700px] mx-auto"></div>
    
    
                    {
                        collections && collections.map((item, index) => {
                            return (
                                <section id={item.split(' ').join('-')} className="max-w-[1300px] mx-auto my-12" key={index}>
                                    <h3 className="text-primary font-heading font-bold text-center text-2xl  mb-4">{item}</h3>
                                    <div className="grid gap-2 p-2 grid-cols-2 sm:grid-cols-2 lg:gap-r lg:grid-cols-5">
                                        {
                                            // prods.filter(prod => prod.fields.collectionReference.fields.collectionName == "Men's Kurta Collection")
                                            prods.filter(prod => prod.fields.collectionReference.fields.collectionName == "Men's Kurta Collection").map((i, idx) => {
    
                                                return <Product key={idx} prodDetails={i} />
                                            })
                                        }
                                    </div>
                                </section>
    
                            )
                        })
                    }
    
    
                </div>);
        }

        else{
           return <NotFound />
        }
  
    }

    else {
        redirect('/')
    }
    // const

}