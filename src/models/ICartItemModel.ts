import IProduct from "./productModel"

export default interface ICartItemModel {
    product:IProduct;
    quantity:number;
    
}