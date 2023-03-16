import { addALL_PHONE, loadBrands } from "../ActionCreators/productAction";




export const fetchDATA = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/brand');
        const data = await res.json();

        if (data.length) {
            dispatch(loadBrands(data));
        }

    }
}

export const fetchALL_Phone =(url)=>{
    return async (dispatch, getState) => {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length) {
            dispatch(addALL_PHONE(data));
        }

    }
}