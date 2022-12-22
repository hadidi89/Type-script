import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductUpdateForm from '../sections/ProductUpdateForm'
import ProductUpdateInfo from '../sections/ProductUpdateInfo'

const ProductUpdateView = () => {
    document.title = 'Update Product | Fixxo.'
  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Update_Products" />
        <ProductUpdateInfo/>
        <ProductUpdateForm/>   
    </>
  )
}

export default ProductUpdateView