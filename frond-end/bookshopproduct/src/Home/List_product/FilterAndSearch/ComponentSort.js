import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, InputGroup, Input, FormGroup, Label } from 'reactstrap';
import { actionFetchFilterAPI, actionFetchListProductAPI, actionFetchSearchProductAPI, actionFetchSortListAPI } from '../../../Redux/Action/ActionlistProduct';

function ComponentFilter(props) {
    let [search, setSearch] = useState("") // search = 2

    //todo khai bao ham useDispatch
    let dispatchRedux = useDispatch()


    //! nhap du lieu bang onChange-> setSearch nhan data dc nhap -> cap nhat lai gia tri bien search
    //! ham handleSearch nhan gia tri bien search ->dispatch -> action

    // //todo xu li search
    // const handleSearch = (search) => { // search: 2
    //     dispatchRedux(actionFetchSearchProductAPI(search)) //2
    // }

    // // todo ham xu ly filter
    // const handleAll = () => {
    //     dispatchRedux(actionFetchListProductAPI());
    // }

    // const handleFilter = (nameFilter) => {
    //     dispatchRedux(actionFetchFilterAPI(nameFilter));
    // }

    // ham xu li sort
    let [sortPrice, setSortPrice] = useState("")
    // console.log("sortPrice", sortPrice);
    dispatchRedux(actionFetchSortListAPI(sortPrice));

    return (
        <Container style={{ marginBottom: '40px', borderRadius: '15px' }}>

            <Row style={{ paddingTop: '20px', marginRight: '10px', lineHeight: '32px' }}>
                {/* <Col sm={7}>
                    <InputGroup>
                        <Button type="submit" onClick={() => handleSearch(search)}>Search</Button>
                        <Input
                            type='text'
                            placeholder='Nhập tên sản phẩm'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </Col> */}
                <Col sm={9}></Col>
                <Col sm={1} ><p>Sắp xếp:</p></Col>
                <Col sm={2}>
                    <FormGroup> 
                        <Input id="Sort"
                            name="Sort"
                            type="select"
                            
                            onChange={(e) => setSortPrice(e.target.value)}
                        >
                            {/* <option placeholder='sort' value={""}>sắp xếp</option> */}
                            <option value={"price,desc"}>Giá cao đến thấp</option>
                            <option value={"price,asc"}>Giá thấp đến cao</option>

                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            {/* <Row style={{ marginTop: '20px', paddingBottom: '30px' }}>
                <Col sm={2}>
                    <Button color="primary" onClick={handleAll}>Tất cả</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => handleFilter("NXB Kim Đồng")}>NXB Kim Đồng</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => handleFilter("NXB Trẻ")}>NXB Trẻ</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" onClick={() => handleFilter("NXB IPM")}>NXB IPM</Button>
                </Col>

                {/* <Col sm={2}>
                    <Button color="success" >Đồng Hồ</Button>
                </Col>

                <Col sm={2}>
                    <Button color="success" >Tablet</Button>
                </Col>  
            </Row> */}
        </Container>
    );
}

export default ComponentFilter;