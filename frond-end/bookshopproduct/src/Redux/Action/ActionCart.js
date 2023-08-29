import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_PRODUCT_CART } from "../Contants/ActionTypeCart"
//! action voi data dau vao nhan tu componentDetail ->payload->reducer
export let addProductCart = (product) => {
        return {
            type: ADD_PRODUCT_CART,
            payload: product

        }
}

export let deleteProductCart = (product) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload: product

    }
}

export let updateProductCart = (product) => {
    return {
        type: UPDATE_PRODUCT_CART,
        payload: product,
    }
}