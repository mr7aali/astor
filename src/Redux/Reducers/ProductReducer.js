import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
};

const productReducer = (state = initialState, action) => {



    const selectedProduct = state.cart.find(p => p._id === action.payload._id);



    switch (action.type) {
        case ADD_TO_CART:

            if (selectedProduct) {

                const newCart = state.cart.filter(p => p._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct],
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };


        case DELETE_FROM_CART:

            const selectedProductForDelet = state.cart.find(p => p._id === action.payload);
            const newCart = state.cart.filter(p => p._id !== action.payload);
            if (selectedProductForDelet.quantity > 1) {
                selectedProductForDelet.quantity = selectedProductForDelet.quantity - 1;
                console.log(state);
                return {
                    ...state,
                    cart: [...newCart, selectedProductForDelet],
                }
            }
            console.log("all delete");
            return {
                ...state,
                cart: state.cart.filter(m => m._id !== action.payload)
            };
        default:
            return state;
    }
}

export default productReducer;