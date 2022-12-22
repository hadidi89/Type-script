import React, {useState, useEffect, createContext} from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import ProductManageView from './views/ProductsManageView';
import { ProductContext, FeaturedProductsContext, TopProductsContext, LeftProductsContext } from './context/contexts';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ProductsContextProvider from './context/ProductContext';
import IProduct from './models/productModel';
import ProductUpdateView from './views/ProductUpdateView';

export interface ProductContextType {
  products:IProduct[]
  featured:IProduct[]
  topProducts:IProduct[]
  leftProducts:IProduct[]
}

function App() {
  
  
  const [products, setProducts] = useState<IProduct[]>([])
  const [featured, setFeatured] = useState<IProduct[]>([])
  const [topProducts, setTopProducts] = useState<IProduct[]>([])
  const [leftProducts, setLeftProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('http://localhost:5000/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async (amount: number = 0) => {
      let url = 'http://localhost:5000/api/products/featured'
      if (amount !== 0)
      url += `/take=${amount}`
      const result = await fetch(url)
      setFeatured(await result.json())
    }

    fetchFeaturedData()

    const fetchTopProductsData = async (amount: number = 0) => {
      let url = 'http://localhost:5000/api/products/topProducts'
      if (amount !== 0)
      url += `/take=${amount}`
      const result = await fetch(url)
      setTopProducts(await result.json())
    }
    fetchTopProductsData()

    const fetchLeftProductsData = async (amount: number = 0) => {
      let url = 'http://localhost:5000/api/products/leftProducts'
      if (amount !== 0)
      url += `/take=${amount}`
      const result = await fetch(url)
      setLeftProducts(await result.json())
    }
    fetchLeftProductsData()

  }, [])  
  


  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductsContextProvider> 
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <TopProductsContext.Provider value={topProducts}>
      <LeftProductsContext.Provider value={leftProducts}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView/>} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/manage_product" element={<ProductManageView />} />
        <Route path="/update_product/:id" element={<ProductUpdateView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </LeftProductsContext.Provider>
      </TopProductsContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
      </ProductsContextProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
