import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input} from 'reactstrap';


function UploadImage(props) {
    let [image, setImage] = useState(null)

    return (
        <Col sm={3}>
            {
                image && (
                    <div>
                        <img
                            alt="not found"
                            src={URL.createObjectURL(image)}
                        />
                        <br />
                        <Button onClick={() => setImage(null)}>Xóa file</Button>
                    </div>
                )}<br/>
            <Form>
                <FormGroup>
                    <Input
                        id="Image"
                        name="Image"
                        placeholder="Input Image"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </FormGroup>

            </Form>
        </Col>

    );
}

export default UploadImage;