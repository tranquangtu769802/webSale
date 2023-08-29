import React from 'react';
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import UpdateForm from './UpdateForm';
import { useSelector } from 'react-redux';

function ModalUpdateProduct({ onHandlCloseModalUpdate , productToUpdate, onHandleUpdateButton, onUpdateProduct}) {
    const handleCloseModalUpdate = ()=>{
        onHandlCloseModalUpdate();
    }
    const ShowFormUpdate = useSelector((actionUpdate)=>actionUpdate.showFormUpdate.showFormUpdate);
    return (
        
            <Container>
            <br />
            <Modal isOpen={ShowFormUpdate}>

                <ModalHeader> <h3>Edit Product</h3></ModalHeader>

                <ModalBody>
                    <UpdateForm onHandleUpdateButton={onHandleUpdateButton} productToUpdate = {productToUpdate} onUpdateProduct={onUpdateProduct}/>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={handleCloseModalUpdate}>Close</Button>
                </ModalFooter>

            </Modal>
        </Container>

    );
}

export default ModalUpdateProduct;