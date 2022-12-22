
// hämta produkt
export interface Product{
    id:string  
    articleNumber: string
    name: string
    description?: string
    category: string
    price: number
    imageName: string
}

// skapa produkt
export interface ProductRequest {
    articleNumber: string
    name: string
    description?: string
    category: string
    price: number
    imageName: string
}
