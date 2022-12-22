import React from 'react'
import ProductCard from '../components/ProductCard'
import IProduct from '../models/productModel'

export interface CategoryRightType{
  product:IProduct[]
}

const CategoryRightSection: React.FC <CategoryRightType> = ({product = []}) => {
  return (

    <section className="flash-right-grid">
      <div className="container">
          <div className='flash-right-box'>
              <p className='flash-title'>2 FOR USD $29</p>
              <button type='button' className='btn-white'>FLASE SALE</button>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 flash-right-grid-boxes" >
              {
                product.map( product => <ProductCard key={product.articleNumber} product={product} />)
              }
          </div>
      </div>
    </section>
  )
}

export default CategoryRightSection