import React, { useMemo, useState } from 'react';
import { Container, Table } from 'reactstrap';
import ResultFormItem from './ResultFormItem';
import Pagination from '../Page/Pagination/Pagination'
//*phần bảng bao gồm toàn bộ phần tử gồm th, tbody:tr, td
function ResulForm({ onHandleUpdateButton, fetchDeleteProduct}) {
  
    return (
      <>
        <Container>
        <br />
        <h3 style={{fontFamily: 'Arial', fontWeight: 'bold'}}>DANH SÁCH SẢN PHẨM</h3>
        <Table hover style={{ marginTop: '10px' }}>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Tên</th>
              <th>Giá tiền</th>
              <th>Thể loại</th>
              <th>Nhà sản xuất</th>
              {/* <th>Image</th> */}
              {/* <th>Sao</th> */}
              <th>Kho</th>
              <th>Ngày tạo</th>
              <th>Sửa</th>
              <th>Xóa</th>
              {/* <th colSpan={2}>Action</th> */}
            </tr>
          </thead>
          <tbody>
            <ResultFormItem onHandleUpdateButton ={onHandleUpdateButton} fetchDeleteProduct={fetchDeleteProduct}/>

          </tbody>
        </Table>
      </Container>
            
    </>      
    );
}

export default ResulForm;