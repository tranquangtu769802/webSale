import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from "reactstrap";
import Pagination from '../Page/Pagination/Pagination';
import '../Page/Pagination/PaginationCSS.css'
//*hiển thị phần body của bảng
function ResultFormItem({ onHandleUpdateButton, fetchDeleteProduct }) {


  let items = ""

  const handleEdit = (product) => {
    onHandleUpdateButton(product)
  }
  const handleDelete = (id) => {
    fetchDeleteProduct(id);
    alert("Xóa thành công")
  }

  let listProduct = useSelector((stateRedux) => stateRedux.listProductState.listProduct)
  // console.log("listProduct", listProduct);

  let PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return listProduct.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // useEffect(()=>{
  //   setCurrentPage()
  // },[])
  if (listProduct) {

    items = currentTableData.map((product, index) => {
      return (
        
          <tr key={product.id}>
            {/* <td>{product.id}</td> */}
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.typeName}</td>
            <td>{product.brandName}</td>
            {/* <td>{product.image}</td> */}
            {/* <td>{product.star}</td> */}
            <td>{product.stock}</td>
            <td>{product.createDate}</td>
            <td>
              <Button color="warning" onClick={() => handleEdit(product)}>Edit</Button>
            </td>
            <td>
              <Button color="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
            </td>
          </tr>
      );
    });
  }

  return (
    <>
      {items}
      <br/>
      <Container>
        <Row>
          <Col>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={listProduct.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
  // return (

  //     <tr>
  //     <td>1</td>
  //     <td>5 Centimet Trên Giây</td>
  //     <td>50000</td>
  //     <td>Tiểu thuyết</td>
  //     <td>NXB Kim Đồng</td>
  //     <td>image</td>
  //     <td>2022-02-22</td>
  //     <td>
  //       <Button color="warning">Edit</Button>
  //     </td>
  //     <td>
  //       <Button color="warning">Delete</Button>
  //     </td>
  //   </tr>

  // );
}

export default ResultFormItem;