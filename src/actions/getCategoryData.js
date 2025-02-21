"use server";
const contentful = require('contentful')
export default async function getCategoryData(categoryID) {

    const client = contentful.createClient({
        space: 'q0pkcppwl2hr',
        environment: 'master',
        accessToken: 'Ba6IMtxMDvRq8pxnHC92NrvIdDZ9CWEt3_i4inKCEH8'
    })
    const p = await client.getEntries({
        content_type: 'category',
        "fields.slug": categoryID,
    })
    console.log(p.items);
    return p.items
    // const productRecords = []

    // return p.items.slice(0, 8) || false
}