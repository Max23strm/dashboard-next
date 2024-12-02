import { ProductCard, products } from '@/products'
import React from 'react'

const ProductsPage = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                products.map((product) => <ProductCard key={ product.id } { ...product } /> )
            }
        </div>
    )
}

export default ProductsPage