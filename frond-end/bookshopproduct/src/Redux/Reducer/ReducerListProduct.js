import { FETCH_DELETE_PRODUCT, FETCH_EDIT_PRODUCT, FETCH_FILTER_PRODUCT, FETCH_LIST_PRODUCT, FETCH_SEARCH_PRODUCT, FETCH_SORT_PRODUCT, FETCH_UPDATE_PRODUCT } from "../Contants/ActionTypeListProduct";

let initialState = {
    listProduct: [],
    buttonEdit: {}
}

export let productReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_LIST_PRODUCT:
            let listProductAPI = action.payload;

            return {
                ...state,
                listProduct: listProductAPI
            }

        case FETCH_DELETE_PRODUCT:
            let idDelete = action.payload;
            let listProductState = state.listProduct
            let indexDelete = listProductState.findIndex((product) => product.id === idDelete)
            //? spice(vi tri muon xoa(index), so phan tu muon xoa)
            //? index => findIndex(() => {})
            listProductState.splice(indexDelete, 1)
            return {
                ...state,
                listType: listProductState
            }

        case FETCH_EDIT_PRODUCT:
            //payload chua du lieu tu phan action cap nhat lai cho listProductEdit -> cap nhat lai du lieu cho buttonEdit -> luu du lieu vao trong store
            let listProductEdit = action.payload;

            return {
                ...state,
                buttonEdit: listProductEdit
            }
        //! -> reducer nhan data tu payload -> cap nhat lai du lieu cua buttonEdit
        case FETCH_UPDATE_PRODUCT:
            //payload chua du lieu tu phan action cap nhat lai cho listProductEdit -> cap nhat lai du lieu cho buttonEdit -> luu du lieu vao trong store
            let listProductUpdate = action.payload;

            return {
                ...state,
                buttonEdit: listProductUpdate
            }
        //! reducer nhan gtri payload cap nhat lai listProduct -> luu vao store    
        case FETCH_SEARCH_PRODUCT:
            //payload chua du lieu tu phan action cap nhat lai cho listProductEdit -> cap nhat lai du lieu cho buttonEdit -> luu du lieu vao trong store
            let listProductSearch = action.payload;

            return {
                ...state,
                listProduct: listProductSearch
            }

        case FETCH_FILTER_PRODUCT:
            //payload chua du lieu tu phan action cap nhat lai cho listProductEdit -> cap nhat lai du lieu cho buttonEdit -> luu du lieu vao trong store
            let listProductFilter = action.payload;

            return {
                ...state,
                listProduct: listProductFilter
            }
            
        case FETCH_SORT_PRODUCT:
            //payload chua du lieu tu phan action cap nhat lai cho listProductEdit -> cap nhat lai du lieu cho buttonEdit -> luu du lieu vao trong store
            let listProductSort = action.payload;

            return {
                ...state,
                listProduct: listProductSort
            }

        default:
            return {
                ...state,
            };
    }
}