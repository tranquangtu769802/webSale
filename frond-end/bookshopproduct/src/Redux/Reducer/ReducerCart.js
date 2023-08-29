import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_PRODUCT_CART } from "../Contants/ActionTypeCart";

let onotialState = {
    listCart: []
}
//! reducer nhan data tu payload -> cap nhat lai listCart ->luu vao store
export let cartReducer = (state = onotialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                listCart: [...state.listCart, action.payload],
            }

        case DELETE_PRODUCT_CART:
            let idDelete = action.payload;
            let listCartState = state.listCart
            let indexDelete = listCartState.findIndex((product) => product.id === idDelete)
            //? spice(vi tri muon xoa(index), so phan tu muon xoa)
            //? index => findIndex(() => {})
            listCartState.splice(indexDelete, 1)
            return {
                ...state,
                listCart: [...listCartState]
            }

        case UPDATE_PRODUCT_CART:
            let listCart = state.listCart; // lay ra listcart ban dau chua update
            let productUpdateStock = action.payload; // du lieu update
            let _listCart = listCart.map((item, index) => {
                if (item.id === productUpdateStock.id) {
                    item.qty = productUpdateStock.qty;
                }
                return item;
            })
            return {
                ...state,
                listCart: [..._listCart]
            }

        default:
            return {
                ...state,
            };
    }
}