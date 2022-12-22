import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import IProduct from '../models/productModel'


const ProductDetailsView: React.FC = () => {
    const params = useParams() 
    
    return (
    <>
        <MainMenuSection />

        <div className="container mt-5">
            <h1>{params.name}</h1>
            <img src={params.imageName}/>
        </div>
        <ProductDetailsSection Product={null} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView