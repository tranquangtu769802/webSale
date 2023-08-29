import { addNewProductAPI, deleteProductAPI, getListProductAPI, getListProductAPIFilter, getListProductAPISearch, getListProductAPISort, updateProductAPI } from "../../API/ProductAPI"
import { FETCH_DELETE_PRODUCT, FETCH_EDIT_PRODUCT, FETCH_FILTER_PRODUCT, FETCH_LIST_PRODUCT, FETCH_SEARCH_PRODUCT, FETCH_SORT_PRODUCT, FETCH_UPDATE_PRODUCT } from "../Contants/ActionTypeListProduct"

// todo action get ListProduct, lam nv cua midleware: call API va dispatch ra response xuong reducer

//! khi dung page thi data hien thi khi lien quan den getListAPI deu phai them content phia sau response(.content)
export let actionFetchListProductAPI = () => {
    return (dispatch) => {
        return getListProductAPI().then((response) => {
            console.log("response", response);
            dispatch(actionFetchListProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchListProduct = (response) => {
    return {
        type: FETCH_LIST_PRODUCT,
        payload: response
    }
}

//todo action them moi product
//? add se co 2nv: add + hien thi(co san)
// get API -> get lai du lieu cu + moi -> cac du lieu duoc get lai se co them du lieu moi them vao la productNew
export let actionAddProduct_API = (productNew) => {
    return (dispatch) => {
         addNewProductAPI(productNew).then((response) => {
            // hien thi lai data
            dispatch(actionFetchListProductAPI())
        })
    }
}

//todo ham xu li delete
export let actionDeleteProduct_API = (id) => {
    return (dispatch) => {
        deleteProductAPI(id).then((response) => {
            dispatch(actionDeleteProduct(id));
            // hien thi lai du lieu moi
            dispatch(actionFetchListProductAPI());

        })
    }
}

// ham dispatch delete xuong reducer
export let actionDeleteProduct = (idDelete) => {
    return {
        type: FETCH_DELETE_PRODUCT,
        payload: idDelete
    }
}

// todo ham action cho nut edit
export let actionEditProduct = (productEdit) => {
    return {
        type: FETCH_EDIT_PRODUCT,
        payload: productEdit
    }
}

//todo update product

    //! -> truyen data sau dong goi xuong actionUpdate
    //!-> nhan du lieu trong Action(productNew) -> rest API ->tra ve du lieu la response
    //! -> dispatch du lieu tu response xuong actionUpdateProduct -> co duoc data trong payload->reducer
export let actionUpdateProduct_API = (productNew) => {
    return (dispatch) => {
        updateProductAPI(productNew).then((response) => {
            dispatch(actionUpdateProduct(response))

            // hien thi lai du lieu
            dispatch(actionFetchListProductAPI());
        })
    }
}

// action dispatch xuong reducer
export let actionUpdateProduct = (response) => {
    return {
        type: FETCH_UPDATE_PRODUCT,
        payload: response
    }
}

// todo action search

//! action nhan gia tri tu dispatch (name) -> getListProductAPISearch voi dau vao la bien "name" lay data tuong ung voi gia tri dau vao o phia backend
//! sau khi lay dc data tuong ung -> tra ve 1 list thoa man gia tri dau vao(response)
//! dispatch voi response dau vao vao ham dispatch(actionFetchSearchProduct)
//! ham dispatch co list nhan duoc dau vao(listProductSearch) =>payload -> reducer
export let actionFetchSearchProductAPI = (name) => {  //name = 2
    return (dispatch) => {
        getListProductAPISearch(name).then((response) => {
            dispatch(actionFetchSearchProduct(response.content))
        })
    }
}

// action dispatch xuong reducer
export let actionFetchSearchProduct = (listProductSearch) => {
    return {
        type: FETCH_SEARCH_PRODUCT,
        payload: listProductSearch
    }
}

//todo filter
export let actionFetchFilterAPI = (fileName)=>{
    return (dispatch) => {
        getListProductAPIFilter(fileName).then((response) => {
            dispatch(actionFetchFilter(response.content))
        })
    }
}
export let actionFetchFilter = (listFilter) => {
    return {
        type: FETCH_FILTER_PRODUCT,
        payload: listFilter
    }
}

//todo Sort
export let actionFetchSortListAPI = (listSort)=>{
    return (dispatch) => {
        getListProductAPISort(listSort).then((response) => {
            dispatch(actionFetchFilter(response.content))
        })
    }
}
export let actionFetchSortList = (sort) => {
    return {
        type: FETCH_SORT_PRODUCT,
        payload: sort
    }
}

//todo Pagination
export let actionFetchPaginationAPI = (page)=>{
    return (dispatch) => {
        getListProductAPISort(page).then((response) => {
            dispatch(actionFetchListProduct(response.content))
        })
    }
}


