import { getListBrandAPI } from "../../API/BrandAPI"
import { FETCH_LIST_BRAND } from "../Contants/AcitonTypeListBrand"

export let actionFetchListBrandAPI = () => {
    return (dispatch) => {
        return getListBrandAPI().then((response)=> {
            dispatch(actionFetchListBrand(response))
        })
    }
}

export let actionFetchListBrand = (response) => {
    return {
        type: FETCH_LIST_BRAND,
        payload: response
    }
}
