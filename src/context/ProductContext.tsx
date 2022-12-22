import React, {useState, useContext, createContext} from 'react'
import {Product, ProductRequest } from '../models/ProductContext'
import { ProductProviderProps } from '../models/ProductProviderModel'

export interface IProductsContext {
    product: Product
    productRequest: ProductRequest
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    create: (e: React.FormEvent) => void
    get: (id: string) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: string) => void
}


export const ProductsContext = createContext<IProductsContext | null>(null)
export const useProductsContext = () => { return useContext(ProductsContext)}

const ProductsContextProvider = ({children} : ProductProviderProps) => {

    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = {id:"", articleNumber: '', name: '', description: '', category: '', price: 0,imageName: ''}
    const productRequest_default: ProductRequest = { articleNumber: '', name: '', description: '',category: '', price: 0, imageName: ''}

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)

        
        })

        if (result.status === 201) {
            setProductRequest(product_default)  
        }
    
    }

    const get  =async (id: string) => {
        const result = await fetch(`${baseUrl}/details/${id}` )
        
        if (result.status === 200)
        setProduct(await result.json())
    
       
    }
    
    const getAll =async () => {
        const result = await fetch(`${baseUrl}` )
        
        if (result.status === 200)
        setProducts(await result.json())
    }
    
    const update =async (e: React.FormEvent) => {
        e.preventDefault()
        // console.log(product.id)

        const result = await fetch(`${baseUrl}/details/${product.id}`, {

            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        
        })

        if (result.status === 200) {
            const data = await result.json()
            console.log(data)
            setProduct(data)
            // setProducts(products => {
            //     return products.map(product => {
            //         if(product.id === data._id) return data
            //         return product
            //     })
            // })
        }
    }

    let remove = async (id: string) => {
        let result = await fetch(`${baseUrl}/details/${id}`, {
            method: 'delete'
        })

        if (result.status === 204) {
            setProduct(product_default)
        }
    }

    return (
        <ProductsContext.Provider value={{product, productRequest, setProduct, setProductRequest, products, setProducts, create, get, getAll, update, remove}}> 
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider