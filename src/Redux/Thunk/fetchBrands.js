import { loadBrands } from "../ActionCreators/productAction";

const fetchBrand = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/brand');
        const data = await res.json();

        if (data.length) {
            dispatch(loadBrands(data));
        }
        
    }
}

export default fetchBrand;