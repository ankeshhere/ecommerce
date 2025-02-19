"use server";
const contentful = require('contentful')
export default async function getProductsHomePage() {





    const client = contentful.createClient({
        space: 'q0pkcppwl2hr',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'Ba6IMtxMDvRq8pxnHC92NrvIdDZ9CWEt3_i4inKCEH8'
    })
    const p = await client.getEntries({
        content_type: 'products',
        limit: 5,
        order: "-sys.createdAt",
    })
    return p.items.slice(0, 8) || false
}