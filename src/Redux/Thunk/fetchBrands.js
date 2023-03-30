
import { toast } from "react-toastify";
import { addALL_PHONE, addPOST, loadBrands } from "../ActionCreators/productAction";




export const fetchDATA = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/brand');
        const data = await res.json();

        if (data.length) {
            dispatch(loadBrands(data));
        }

    }
}

export const fetchALL_Phone = (url) => {
    return async (dispatch, getState) => {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length) {
            dispatch(addALL_PHONE(data));
        }

    }
}

export const addPost_Thank = (product,reset) => {
    return async (dispatch, getState) => {



        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                dispatch(addPOST(product))
                toast(`Added Successfully`)
                reset();
                // navigate(from, { replace: true });
            })
    }
}