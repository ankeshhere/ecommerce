"use server";
import { createClient } from 'contentful';
export default async function getProductDetails(id) {


    const client = await createClient({
        space: 'q0pkcppwl2hr',
        environment: 'master',
        accessToken: 'Ba6IMtxMDvRq8pxnHC92NrvIdDZ9CWEt3_i4inKCEH8'
    })

    const p = await client.getEntries({
        content_type: "products",
        "fields.slug": id
    })

    return p.items


}