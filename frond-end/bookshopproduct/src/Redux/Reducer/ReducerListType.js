import { FETCH_DELETE_PRODUCT } from "../Contants/ActionTypeListProduct";
import { FETCH_LIST_TYPE } from "../Contants/ActionTypeListType";

let initialState = {
    listType: []
}

export let typeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_LIST_TYPE:
            let listTypeAPI = action.payload
            return{
                ...state,
                listType: listTypeAPI
            }
    
        default:
            return{
                ...state
            }
    }
}