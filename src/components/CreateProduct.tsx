import React from 'react'
import {IProductsContext, ProductsContext } from '../context/ProductContext'


const CreateProduct = () => {
    const { productRequest, setProductRequest, create } = React.useContext(ProductsContext) as IProductsContext
    

  return (
    <section className='product-manage'>
      <div className="container">
        <h2 style={{ marginTop: "100px" }}>Manage Products</h2>
        <form onSubmit={create} noValidate>
          <input value={productRequest.name} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type='text' className='form-control my-3' placeholder='Enter product name...' />
          <select value={productRequest.category} onChange={(e) => setProductRequest({ ...productRequest, category: e.target.value })} className="form-select">
            <option defaultValue="">Enter category...</option>
              <option value="Basic">Basic</option>
              <option value="Coats">Coats</option>
              <option value="Dresses">Dresses</option>
              <option value="Fashion">Fashion</option>
              <option value="Jackets">Jackets</option>
              <option value="Jeans">Jeans</option>
              <option value="Pants">Pants</option>
              <option value="Sets">Sets</option>
              <option value="Shoes">Shoes</option>
              <option value="Sweaters">Sweaters</option>
              <option value="T-Shirts">T-Shirts</option>
              <option value="Tops">Tops</option>
              <option value="Watches">Watches</option>
          </select>
          <input value={productRequest.price || ''} onChange={(e) => setProductRequest({ ...productRequest, price: Number(e.target.value) })} type='number' min={0} step="any" className='form-control my-3' placeholder='Enter product price...' />
          <input value={productRequest.imageName} onChange={(e) => setProductRequest({ ...productRequest, imageName: e.target.value })} type='text' className='form-control my-3' placeholder='Enter product image link...' />
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-success mb-5'>ENTER NEW PRODUCT</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateProduct

