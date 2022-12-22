
import ShoppingCart from "../components/ShoppingCart";
import IProduct from "../models/productModel";
import { createContext, useContext, useState } from "react";

 export interface ShoppingCartContextModel {
    
    articleNumber?: string
    quantity?: number | null
    cartItems?: any
    cartQuantity: number
    getItemQuantity: any
    incrementQuantity: any
    decrementQuantity: any
    removeItem: any
    
}
  interface IShoppingCartProps {
    children: any
     
}

const ShoppingCartContext = createContext<ShoppingCartContextModel | null>(null)


export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children} : IShoppingCartProps ) => {
    const [cartItems, setCartItems ] = useState <any[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity: number, product: { quantity: number; }) => product.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find((product: { articleNumber: string; }) => product.articleNumber  === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItems: { articleNumber: string; product: IProduct; }) => {
        const {articleNumber, product} = cartItems

        setCartItems((items: any[]) => {
            if (items.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber) == null) {
                return [...items,{articleNumber, product, quantity: 1 }]

            }else { 
                return items.map((item: { articleNumber: string; quantity: number; }) => {
                    if ( item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItems: { articleNumber: string; }) => {
        const {articleNumber} = cartItems

        setCartItems((items: any[]) => {
            if (items.find((item: { articleNumber: string; }) => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter((item: { articleNumber: string; }) => item.articleNumber !== articleNumber)

            }else { 
                return items.map((item: { articleNumber: string; quantity: number; }) => {
                    if ( item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    const removeItem = (articleNumber: string) => {
        setCartItems((product: any[]) => {
            return product.filter((product: { articleNumber:string; }) => product.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children} 
        <ShoppingCart/>

    </ShoppingCartContext.Provider>
}
