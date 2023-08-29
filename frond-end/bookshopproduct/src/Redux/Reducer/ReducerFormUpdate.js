import { UPDATE_FORM_CLOSE, UPDATE_FORM_OPEN } from "../Contants/ActionTypeFormUpdate";


let initialState = {
    showFormUpdate: false
}

export let formReducerUpdate = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_OPEN:
            return {
                ...state,
                showFormUpdate: true
            }
        case UPDATE_FORM_CLOSE:
            return {
                ...state,
                showFormUpdate: false
            }

        default:
            return {
                ...state
            }
    }
}