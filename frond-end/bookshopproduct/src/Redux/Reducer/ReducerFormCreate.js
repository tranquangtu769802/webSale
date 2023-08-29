import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionTypeFormCreate";

let initialState = {
    showForm: false,
}

export let formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INPUT_FORM:
            return {
                ...state,
                showForm: true
            }

        case CLOSE_INPUT_FORM:
            return {
                ...state,
                showForm: false
            }


        default:
            return {
                ...state
            }
    }
}
