import { FETCH_LIST_BRAND } from "../Contants/AcitonTypeListBrand";

const initialState = {
    listBrand: []
}

export let brandReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_BRAND:
            let listBrandAPI = action.payload
            return {
                ...state,
                listBrand: listBrandAPI            
            }
            
    
        default:
            return {
                ...state
            }
    }
}