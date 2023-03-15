import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes/actionTypes"

export const addToCart=(data)=>{
    return {
        type: ADD_TO_CART,
        payload:data
    }
}
export const deleteFromCart=(id)=>{
  // console.log(id);
  return{
    type:DELETE_FROM_CART,
    payload:id,
  }
}