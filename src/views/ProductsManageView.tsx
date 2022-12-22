import React from 'react'
import CreateProduct from '../components/CreateProduct'
import ProductsList from '../components/ProductList'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuSection from '../sections/MainMenuSection'

const ProductManageView:React. FC = () => {
  document.title = 'Manage Products | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Users" />
      <CreateProduct />
      <ProductsList />
    </>
  )
}

export default ProductManageView