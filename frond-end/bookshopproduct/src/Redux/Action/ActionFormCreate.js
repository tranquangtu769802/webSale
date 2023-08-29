import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionTypeFormCreate"

export let actionShowForm = () => {
    return {
        type: SHOW_INPUT_FORM,
    }
}

export let actionCloseForm = () => {
    return {
        type: CLOSE_INPUT_FORM,
    }
}