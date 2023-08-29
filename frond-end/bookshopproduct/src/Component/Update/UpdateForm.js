import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";


function UpdateForm({ productToUpdate, onUpdateProduct }) {

  // todo lay du lieu nut edit trong store
  let stateRedux = useSelector((stateRedux) => stateRedux)

  let listType = stateRedux.listTypeState.listType;

  let listBrand = stateRedux.listBrandState.listBrand;

  let productEdit = stateRedux.listProductState.buttonEdit; // lay du lieu product trong store(buttonEdit)

  console.log("edit", productEdit);

  let [Name, setName] = useState("");
  let [Price, setPrice] = useState("");
  let [Image, setImage] = useState("");
  let [Type, setType] = useState("");
  let [Brand, setBrand] = useState("");
  let [Star, setStar] = useState("");
  let [Stock, setStock] = useState("");


  const handleClickUpdate = () => {


    let product_New = {
      id: productEdit.id,
      name: Name,
      price: Price,
      image: Image,
      type: Type,
      brand: Brand,
      star: Star,
      stock: Stock,
    }
    // console.log("product_New", product_New);

    onUpdateProduct(product_New);
    alert("Cập nhật dữ liệu thành công")
  }


  //todo ham hien thi du lieu len o input
  //productEdit chua du lieu product o tren duoc truyen xuong tung thanh phan
  useEffect(() => {
    setName(productEdit.name);
    setPrice(productEdit.price);
    setImage(productEdit.image);
    setStar(productEdit.star);
    setStock(productEdit.stock);

    // tim id type 
    //! do listType la 1 [], nhung khi an  edit kq tra ve la  1 obj
    //! do vay truoc khi lay id, phai dung ham find để tìm và so sanh tên với tên cùng dòng nút edit, từ đó check và lấy đc id => find((ten bien) => {})
    let idType = listType.find((type) => type.name === productEdit.typeName).id
    setType(idType);

    // tim id type 
    //! do listBrand la 1 [], nhung khi an  edit kq tra ve la  1 obj
    //! do vay truoc khi lay id, phai dung ham so sanh ten de lay id => find((ten bien) => {})
    let idBrand = listBrand.find((brand) => brand.name === productEdit.brandName).id
    setBrand(idBrand);


  }, [])

  let rowBrand = listBrand.map((brand, index) => {
    return <option value={brand.id} >{brand.name}</option>
  })

  let rowType = listType.map((type, index) => {
    return <option value={type.id} >{type.name}</option>
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
            value={Name}
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
            value={Price}
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
            value={Image}
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
            value={Stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Type">Select a Type: </Label>
          <Input id="Type"
            name="Type"
            type="select"
            value={Type}
            onChange={(e) => setType(e.target.value)}
          >

            {rowType}
          </Input>
        </FormGroup>



        <FormGroup>
          <Label for="Brand">Select a Brand: </Label>
          <Input id="Brand" name="Brand" type="select" value={Brand}
            onChange={(e) => setBrand(e.target.value)}
          >

            {rowBrand}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Star">Select a Star: </Label>
          <Input id="Star" name="Star" type="select" value={Star}
            onChange={(e) => setStar(e.target.value)}
          >
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>

          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary"
        onClick={handleClickUpdate}
      >Update</Button>
      <Button color="danger">Reset</Button>
    </Container>

  );
}

export default UpdateForm;