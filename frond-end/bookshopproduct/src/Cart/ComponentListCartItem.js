import React from 'react';
import { useSelector } from 'react-redux';
import ComponentCartAmountToggle from '../Home/List_product/ComponentCartAmountToggle';
import { Button } from "reactstrap";

function ComponentListCartItem({onChangeAmount, onHandleDeleteCart}) {

    //todo lay ra listProduct trong store
    let listCart = useSelector((stateRedux) => stateRedux.listCartState.listCart)

    // khai baos bien productCarts de hien thi du lieu
    let productCarts = "";

    // ham xu li delete
    let handleDelete = (product) => {
        onHandleDeleteCart(product)
    }

    if (listCart) {
        productCarts = listCart.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td> <ComponentCartAmountToggle id={product.id} limit={product.stock} amount={product.qty} onChangeAmount={onChangeAmount} /></td>
                    <td>{product.price * product.qty}</td>
                    <td> <Button color="danger" onClick={() => handleDelete(product)}>Delete</Button></td>
                </tr>
            );
        })
    }

    return productCarts;
}

export default ComponentListCartItem;