"use server";
const contentful = require('contentful')
export default async function getCategoryCollections(category) {

    const client = contentful.createClient({
        space: 'q0pkcppwl2hr',
        environment: 'master',
        accessToken: 'Ba6IMtxMDvRq8pxnHC92NrvIdDZ9CWEt3_i4inKCEH8'
    })
    const p = await client.getEntries({
        content_type: 'collection',
        "fields.categoryName.sys.contentType.sys.id": "category",
        "fields.categoryName.fields.slug": category
    })
    console.log(p.items);

    const collectionNames = []
    p.items.map((item) => {
        collectionNames.push(item.fields.collectionName)
    })
    return collectionNames
    // const productRecords = []

    // return p.items.slice(0, 8) || false
}

export async function getProductsbasedonCollection(collection) {
    // const productRecords = []
    const client = contentful.createClient({
        space: 'q0pkcppwl2hr',
        environment: 'master',
        accessToken: 'Ba6IMtxMDvRq8pxnHC92NrvIdDZ9CWEt3_i4inKCEH8'
    })
    // console.log(collection);
    const products = await client.getEntries({
        content_type: 'products',
        "fields.collectionReference.sys.contentType.sys.id": "collection",
        "fields.collectionReference.fields.collectionName[in]": collection.join(",")
    })
    // console.log();
    return products.items || []
}