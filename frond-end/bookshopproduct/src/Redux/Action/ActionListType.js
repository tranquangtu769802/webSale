import { getListTypeAPI } from "../../API/TypeAPI"
import { FETCH_LIST_TYPE } from "../Contants/ActionTypeListType"

export let actionFetchListTypeAPI = () => {
    return (dispatch) => {
        return getListTypeAPI().then((response)=> {
            dispatch(actionFetchListType(response))
        })
    }
}

export let actionFetchListType = (response) => {
    return {
        type: FETCH_LIST_TYPE,
        payload: response
    }
}