
import { createContext} from 'react';
import IProduct from '../models/productModel';

export const ProductContext =createContext([] as IProduct[]);
export const FeaturedProductsContext = createContext([] as IProduct[])
export const TopProductsContext = createContext([] as IProduct[])
export const LeftProductsContext = createContext([] as IProduct[])