
import { toast } from "react-toastify";
import { addALL_PHONE, addPOST, loadBrands } from "../ActionCreators/productAction";




export const fetchDATA = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/brand');
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



        fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/addproduct', {
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