import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {



    const selectedProduct = state.cart.find(p => p._id === action.payload._id);
    


    switch (action.type) {
        case ADD_TO_CART:
            if(selectedProduct){
                return state;
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };


        case DELETE_FROM_CART:
            console.log(action.payload);
            return {
                ...state,
                cart: state.cart.filter(m => m._id !== action.payload)
            };
        default:
            return state;
    }
}

export default productReducer;