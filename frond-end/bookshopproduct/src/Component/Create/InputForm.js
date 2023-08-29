import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { generateId } from '../../Utils/generateId';
import { getNowDate } from '../../Utils/GetNowDate';
import { useSelector } from 'react-redux';

function InputForm({ onCreateNewProduct}) {

  let [Name, setName] = useState();
  let [Price, setPrice] = useState();
  let [Image, setImage] = useState();
  let [Type, setType] = useState();
  let [Brand, setBrand] = useState();
  let [Star, setStar] = useState();
  let [Stock, setStock] = useState();

  const handleClick = () => {

    let product_New = {
      id: generateId(),
      name: Name,
      price: Price,
      image: Image,
      type: Type,
      brand: Brand,
      star: Star,
      stock: Stock,
      date: getNowDate()
    }

    onCreateNewProduct(product_New);
    alert("Tạo mới thành công")
  }
  let listType = useSelector((stateredux1)=>stateredux1.listTypeState.listType);

  let listBrand = useSelector((stateRedux)=>stateRedux.listBrandState.listBrand);

  let rowBrand = listBrand.map((brand, index) => {
    return   <option value={brand.id} key={brand.id}>{brand.name}</option>
  })

  let rowType = listType.map((type, index) => {
    return   <option value={type.id} key={type.id}>{type.name}</option>
  })

  return (
    <Container>
      <Form>
        
        <FormGroup>
          <Label for="Name">Name: </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Input Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>


       
        <FormGroup>
          <Label for="Price">Price: </Label>
          <Input
            id="Price"
            name="Price"
            placeholder="Input Price"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>


        
        <FormGroup>
          <Label for="Image">Image: </Label>
          <Input
            id="Image"
            name="Image"
            placeholder="Input Image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Stock">Stock: </Label>
          <Input
            id="Stock"
            name="Stock"
            placeholder="Input Stock"
            type="text"
            onChange={(e) => setStock(e.target.value)}
          />
        </FormGroup>

        
        <FormGroup>
          <Label for="Type">Select a Type: </Label>
          <Input id="Type"
            name="Type"
            type="select"
            onChange={(e) => setType(e.target.value)}>
            {/* <option value={"Sách kỹ năng sống"}>Sách kỹ năng sống</option>
            <option value={"Tiểu thuyết"}>Tiểu thuyết</option>
            <option value={"Truyện tranh"}>Truyện tranh</option>
            <option value={"Sách kinh tế"}>Sách kinh tế</option>
            <option value={"Light novel"}>Light novel</option> */}

            {rowType}
          </Input>
        </FormGroup>


        {/* Postion */}
        <FormGroup>
          <Label for="Brand">Select a Brand: </Label>
          <Input id="Brand" name="Brand" type="select" onChange={(e) => setBrand(e.target.value)}>
            {/* <option value={"NXB Kim Đồng"}>NXB Kim Đồng</option>
            <option value={"NXB Trẻ"}>NXB Trẻ</option>
            <option value={"NXB IPM"}>NXB IPM</option> */}
            {rowBrand}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Star">Select a Star: </Label>
          <Input id="Star" name="Star" type="select" onChange={(e) => setStar(e.target.value)}>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleClick}>Create</Button>
      <Button color="danger">Reset</Button>
    </Container>

  );
}

export default InputForm;