import React from 'react'
import { useQuery } from 'react-apollo'
import { useProduct } from 'vtex.product-context'
import ProductSimilarsItem from './ProductSimilarsItem'
import { Product } from 'vtex.product-context/react/ProductTypes'

import GET_PRODUCTS from '../../graphql/product.gql'

const ProductSimilars = () => {
    const productContext = useProduct() || null

    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        variables: { slug: productContext?.product?.linkText }
    })

    const similars: Product[] = data?.product.recommendations.similars

    if (loading || error) return null

    return (
        <>
            {similars && similars.map((item) => {
                return <ProductSimilarsItem link={item.link} image={item.items[0].images[0].imageUrl} productName={item.productName} />
            })}
        </>
    )
}

export default ProductSimilars