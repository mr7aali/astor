import { ADD_POST_STATE, ADD_TO_CART, DELETE_FROM_CART, LOAD_ALL_PHONE, LOAD_BRANDS, RELOAD_ALL_PHONE } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    Brands: [],
    allphone: [],
    loader: false
};

const productReducer = (state = initialState, action) => {



    const selectedProduct = state.cart.find(p => p._id === action.payload._id);



    switch (action.type) {
        case LOAD_ALL_PHONE:
            return {
                ...state, allphone: action.payload
            };
        case RELOAD_ALL_PHONE:
            console.log(action.payload._id);
            const newPhones = state.allphone.filter(p=>p._id !== action.payload._id);

            return {
                ...state,
                allphone: newPhones
            }

        case ADD_POST_STATE:
            return {
                ...state, allphone: [...state.allphone, action.payload]
            }
        case LOAD_BRANDS:
            return {
                ...state, Brands: action.payload
            }
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

                return {
                    ...state,
                    cart: [...newCart, selectedProductForDelet],
                }
            }

            return {
                ...state,
                cart: state.cart.filter(m => m._id !== action.payload)
            };


        default:
            return state;
    }
}

export default productReducer;