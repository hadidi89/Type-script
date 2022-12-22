import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../context/contexts'




const ProductsView: React.FC = () => {
  const products = React.useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" product={products}/>
      <FooterSection />
    </>
  )
}

export default ProductsView