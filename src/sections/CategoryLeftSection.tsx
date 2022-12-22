import React from 'react'
import ProductCard from '../components/ProductCard'
import IProduct from '../models/productModel'

export interface Props{
  product:IProduct[]
}

const CategoryLeftSection : React.FC <Props>= ({product = []}) => {
  return (

    <section className="flash-left-grid">
      <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 flash-left-grid-boxes" >
                {
                  product.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
            </div>
            <div className='flash-left-box'>
                <p className='flash-title'>2 FOR USD $29</p>
                <button type='button' className='btn-white'>FLASE SALE</button>
            </div>
      </div>
      <hr></hr>
    </section>
  )
}

export default CategoryLeftSection