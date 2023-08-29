import React from 'react';
import { Button } from "reactstrap";
import { Container} from 'reactstrap';


function CreateButton({onHandleCreateButtuon}) {

  const handleClick  = () => {
    onHandleCreateButtuon();
  }

    return (
        <Container>
        <br />
        <Button color="primary" onClick={handleClick} style={{marginLeft: '85%'}}>Create New Product</Button>
      </Container>
  
    );
}

export default CreateButton;