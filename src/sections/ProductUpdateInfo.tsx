import React from 'react'
import {IProductsContext, ProductsContext } from '../context/ProductContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductUpdateInfo = () => {

    const { product } = React.useContext(ProductsContext) as IProductsContext

    return (
        <section className='product-update-box'>
            <h3 className='d-flex justify-content-center'>Update Product</h3>
            <div className='container'>
                <div className='update-box'>
                    <div className='img'>
                        <img src={product.imageName} />
                    </div>
                    <div className='text'>
                        <span>Product name:</span>
                        <h5>{product.name}</h5>
                        <span>Category:</span>
                        <h5>{product.category}</h5>
                        <span>Price:</span>
                        <h5>{currencyFormatter (product.price)}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductUpdateInfo