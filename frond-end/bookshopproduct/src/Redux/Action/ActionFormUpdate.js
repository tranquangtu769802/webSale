import { UPDATE_FORM_CLOSE, UPDATE_FORM_OPEN } from "../Contants/ActionTypeFormUpdate"

export const ActionUpdateFormOpen = () =>{
    return{
        type: UPDATE_FORM_OPEN
    };
}

export const ActionUpdateFormClose = () =>{
    return{
        type: UPDATE_FORM_CLOSE
    };
}