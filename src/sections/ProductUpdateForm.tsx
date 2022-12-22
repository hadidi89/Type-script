import React from 'react'
import { useEffect } from 'react'
import {IProductsContext, ProductsContext } from '../context/ProductContext'
import { NavLink, useParams } from 'react-router-dom'

const ProductUpdateForm: React.FC  = () => {


    const { get, update, product, setProduct } = React.useContext(ProductsContext) as IProductsContext

    const id = useParams().id
    const getId = id !== undefined ? (id): "";
    
    // console.log(product)
    
    useEffect (() => {
        if(id) {
            get(id)
        }
    }, [])
    
  return (
    <section className='product-update'>
        <div className="container">
            <form onSubmit={update} noValidate>
                <input value={product.name || ''} onChange={(e) => setProduct({...product, name: e.target.value})} type='text'className='form-control my-3' placeholder='Enter product name...' />
                <select value={product.category || ''} onChange={(e) => setProduct({...product, category: e.target.value})} className="form-select">
                    <option defaultValue="">Enter category...</option>
                    <option value="Basic">Basic</option>
                    <option value="Casual">Casual</option>
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
                <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type='number'step="any" min={0} className='form-control my-3' placeholder='Enter product price...' />
                <input value={product.imageName || ''} onChange={(e) => setProduct({...product, imageName: e.target.value})} type='text'className='form-control my-4' placeholder='Enter product image link...' />
                <div className='button-control'>
                    <button type='submit' className='btn btn-danger'><i className="fa-solid fa-wrench" ></i></button>
                    <NavLink className='btn btn-secondary' to={`/manage_product`} end><i className="fa-solid fa-house-person-return"></i></NavLink>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ProductUpdateForm