import { combineReducers } from "redux";
import { formReducer } from "./ReducerFormCreate";
import { formReducerUpdate } from "./ReducerFormUpdate";
import { productReducer } from "./ReducerListProduct";
import { brandReducer } from "./ReducerListBrand";
import { typeReducer } from "./ReducerListType";
import { cartReducer } from "./ReducerCart";

export let rootReducer = combineReducers({
    showFormState: formReducer,
    showFormUpdate: formReducerUpdate,
    listProductState: productReducer,
    listBrandState: brandReducer,
    listTypeState: typeReducer,
    listCartState: cartReducer,
})
