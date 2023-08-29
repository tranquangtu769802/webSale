import React, { useEffect, memo } from 'react';
import CreateButton from '../Component/Create/CreateButton';
import ResulForm from '../Component/ResultForm';
import { Container } from "reactstrap";
import ModelCreateNewProduct from '../Component/Create/ModelCreateNewProduct';
import { useState } from "react";
import ModalUpdateProduct from '../Component/Update/ModalUpdateProduct';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCloseForm, actionShowForm } from '../Redux/Action/ActionFormCreate';
import { ActionUpdateFormClose, ActionUpdateFormOpen } from '../Redux/Action/ActionFormUpdate';
import { actionAddProduct_API, actionDeleteProduct_API, actionEditProduct, actionFetchListProductAPI, actionUpdateProduct_API } from '../Redux/Action/ActionlistProduct';
import { actionFetchListBrandAPI } from '../Redux/Action/ActionListBrand';
import { actionFetchListTypeAPI } from '../Redux/Action/ActionListType';
// import Axios from "axios";

//*bao toàn bộ tất cả thành phần hiển thị trên màn hình
function ProductContainner(props) {

  //* xu ly logic cho phần ẩn/hiện modal khi ấn nút(create)
  // let [ShowForm, setShowForm] = useState(false)

  //redux: khai bao useDispatch de gui du lieu len tren store
  let dispatchRedux = useDispatch();

  //*xử lý logic phần ẩn hiện modal khi ấn nút (edit update)
  // let [EditForm, setEditForm] = useState(false)


  // let [listProduct, setListProduct] = useState([]);
  // let [listBrand, setListBrand] = useState([]);
  // let [listType, setListType] = useState([]);

  // ham xu li chuyen trang
  let navigate = useNavigate();

  // khai bao state ProductUpdate
  // let [productToUpdate, setProductToUpdate] = useState({})


  //hàm xử lý việc mở modal thông qua ấn nút "Create New Product"
  const onHandleCreateButtuon = () => {
    dispatchRedux(actionShowForm());
  }

  //hàm xử lý việc đóng modal khi ấn "Close" (create)
  const onHandlCloseButtuon = () => {
    dispatchRedux(actionCloseForm());
  }

  const onHandlCloseModalUpdate = () => {
    dispatchRedux(ActionUpdateFormClose());
  }

  // let fetchListProduct = () => {
  //   getListProductAPI().then((response) => {
  //     let listProduct_API = response;
  //     setListProduct(listProduct_API);
  //   })
  // }

  //*getById để lấy Id phục vụ cho Update
  // let fetchProductById = (id) => {
  //   getProductByIdAPI(id).then((response) => {
  //     setProductToUpdate(response);
  //   })
  // }


  // let fetchListBrand = () => {
  //   getListBrandAPI().then((response) => {
  //     let listBrand_API = response;
  //     setListBrand(listBrand_API)
  //   })
  // }

  // let fetchListType = () => {
  //   getListTypeAPI().then((response) => {
  //     let listType_API = response;
  //     setListType(listType_API)
  //   })
  // }

  // khai bao ham useEffect
  //lay gia tri tu localStorage
  useEffect(() => {
    // if (localStorage.getItem("listProduct")) {
    //   let localStorage_listProduct = JSON.parse(localStorage.getItem("listProduct"))
    //   setListProduct(localStorage_listProduct)
    // }

    dispatchRedux(actionFetchListProductAPI());
    dispatchRedux(actionFetchListBrandAPI());
    dispatchRedux(actionFetchListTypeAPI())
    // fetchProductById();
  }, [])

  // xu li chuc nang login
  useEffect(() => {
    let user_login = JSON.parse(localStorage.getItem("user_login"));

    if (!user_login) {
      navigate("/login")
    }
  })

  let onCreateNewProduct = (productNew) => {
    console.log("productNew", productNew);
    
    let productNewParam = {

      productName: productNew.name,
      price: productNew.price,
      image: productNew.image,
      brandId: productNew.brand,
      typeId: productNew.type,
      star: productNew.star,
      stock: productNew.stock
    }

    // addNewProductAPI(productNewParam).then((response) => {
    //   console.log(response);
    //   dispatchRedux(actionFetchListProductAPI());

    // })
    dispatchRedux(actionAddProduct_API(productNewParam))
    dispatchRedux(actionCloseForm());
  }

  let onUpdateProduct = (productNew) => {
    //! sau khi lay data co chua id can update sau khi an nut edit updateForm 
    //!-> dong goi trong ProductContainer
    let productUpdateParam = {
      id: productNew.id,
      productName: productNew.name,
      price: productNew.price,
      image: productNew.image,
      brandId: productNew.brand,
      typeId: productNew.type,
      star: productNew.star,
      stock: productNew.stock
    }

    // console.log("productUpdateParam", productUpdateParam);
    // updateProductAPI(productUpdateParam).then((response) => {
    //   dispatchRedux(actionFetchListProductAPI());
    // })
    
    //?luong chay: UpdateForm ->ProductContainer->ActionListProduct->ReducerListProduct
    //!truyen du lieu xuong action
    dispatchRedux(actionUpdateProduct_API(productUpdateParam))
    dispatchRedux(ActionUpdateFormClose());
  }

  //*Delete
  let fetchDeleteProduct = (id) => {
    // deleteProductAPI(id).then((response)=>{
    //   dispatchRedux(actionFetchListProductAPI());
    // })
    dispatchRedux(actionDeleteProduct_API(id))
  }

   //hàm xử lý việc mở modal thông qua ấn nút "Edit"
  //! b1: lay duoc id can edit, viet theo kieu arow function
  //! b2: lay obj cua id can lay => getProductById
  //? luong chay: resultFormItem -> onHandleUpdateButton(container) -> actionEditProduct -> reducer co type la edit -> formUpdate: lay du lieu product luu trong store
  function onHandleUpdateButton(productNew) {
    dispatchRedux(ActionUpdateFormOpen());
    // setProductToUpdate(productNew)
    dispatchRedux(actionEditProduct(productNew))
    
  }

    // const onHandleUpdateButton = async (id) => {
    //   setEditForm(true);
    //     let productById = await getProductByIdAPI(id);
    //     setProductToUpdate(productById)
    // }

  return (
    <>
      <Container>
        {/* Nút thêm mới */}
        <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />

        <ModelCreateNewProduct  onHandlCloseButtuon={onHandlCloseButtuon} onCreateNewProduct={onCreateNewProduct} />

        <ModalUpdateProduct onHandlCloseModalUpdate = {onHandlCloseModalUpdate} onUpdateProduct = {onUpdateProduct}/>
        {/* Form kết quả */}
        <ResulForm onHandleUpdateButton = {onHandleUpdateButton} fetchDeleteProduct={fetchDeleteProduct}/>
      </Container>

    </>
  );
}

export default memo(ProductContainner);