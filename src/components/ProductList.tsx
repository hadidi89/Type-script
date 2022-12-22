import React, { useEffect } from 'react'
import {IProductsContext, ProductsContext } from '../context/ProductContext'
import { Product} from '../models/ProductContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { NavLink } from 'react-router-dom'



function ProductsList() {
    const { products, getAll, remove } = React.useContext(ProductsContext) as IProductsContext

    useEffect(() => {
        getAll()

    }, [])

    return (
        <>
            <div className='container'>
                <h3 className='title'>List of Products </h3>
                {products.map((product: Product) => (
                    <div className=' info' key={product.id}>
                        <img src={product.imageName} />
                        <h6>name: </h6> <p>{product.name}</p>
                        <h6>Category:</h6> <p>{product.category}</p>
                        <h6>Price:</h6> <p>{currencyFormatter(product.price)}</p>
                        <div>
                            <NavLink className=" btn btn-secondary " to={`/update_product/${product.id}`} end>
                            <i className="fa-solid fa-wrench" ></i>
                            </NavLink>
                        </div>
                        <button className=' btn btn-danger ' onClick={(e) => remove(product.id)}><i className='fa-solid fa-trash'></i></button>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default ProductsList

