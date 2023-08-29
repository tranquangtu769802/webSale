import React from 'react';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import InputForm from './InputForm';
import { useSelector } from 'react-redux';
//*phần modal: bao gồm header, body và footer
function ModelCreateNewProduct({ onHandlCloseButtuon, onCreateNewProduct}) {

    const handleClose = () => {
        onHandlCloseButtuon();
    }
    // nhan du lieu tu store: useSelector
    let stateShowForm = useSelector((stateRedux) => stateRedux.showFormState.showForm)

    return (
        <Container>
            <br />
            <Modal isOpen={stateShowForm}>

                <ModalHeader> <h3>Create New Product</h3></ModalHeader>

                <ModalBody>
                    <InputForm onCreateNewProduct={onCreateNewProduct}/>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={handleClose}>Close</Button>
                </ModalFooter>

            </Modal>
        </Container>

    );
}

export default ModelCreateNewProduct;
