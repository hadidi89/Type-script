import React from 'react'
import IProduct from '../models/productModel'

interface ProductDetailsType {
  Product: IProduct | null
}

const ProductDetailsSection: React.FC <ProductDetailsType>= ({Product}) => {
  return (
    <section className='product-details'>
        <div className='container'></div>
        <div>
          <div>{Product?.name} </div>
          <img src={Product?.imageName}/>
        </div>
    </section>
  )
}

export default ProductDetailsSection