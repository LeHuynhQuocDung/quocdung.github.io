import ProductE from "../../component/ProductE";

// for add item to cart
export const addCart = (product) =>{
    return{
        type: "ADDCART",
        payload: product
    }
}
//for delete Item from cart
export const delCart = (product) =>{
    return{
        type: "DELITEM",
        payload: product
    }
}