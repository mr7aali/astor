import { ADD_POST_STATE, ADD_TO_CART, DELETE_FROM_CART, LOAD_ALL_PHONE, LOAD_BRANDS } from "../actionTypes/actionTypes"



export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  }
}
export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  }
}

export const loadBrands = (data) => {
  return {
    type: LOAD_BRANDS,
    payload: data
  }
}
export const addALL_PHONE = (data) => {
  return {
    type: LOAD_ALL_PHONE,
    payload: data
  }
}


export const addPOST =(data) =>{
  return {
    type: ADD_POST_STATE,
    payload: data
  }
}