import React from 'react';
import { data_Product } from '../../Data/Data';
import { Row } from "reactstrap";
import ComponentListProductItem from './ComponentListProductItem';
import { useSelector } from 'react-redux';

function ComponentListProduct(prop) {
    let listProduct = useSelector((actionRedux)=> actionRedux.listProductState.listProduct)
    return (
        <div>
            <Row>
                {listProduct.map((product, index) => <ComponentListProductItem key={product.id} {...product} />)}
            </Row>
        </div>
    );
}

export default ComponentListProduct;