import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import ComponentListProductItemStar from './ComponentListProductItemStar';
import './ComponentListProductItem.css'
import { Link } from "react-router-dom";
import fomater from '../../Utils/fomater';

function ComponentListProductItem({ id, name, typeName, brandName, price, image, star }) {

    return (
        <Col lg={2} xl={3} md={2} sm={5}>
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '18rem',height:'470px', marginBottom: '30px', backgroundColor: 'rgb(231, 225, 173)' }}>
                <Card.Img variant="top" className='product__img' src={image} alt='no_image' />
                <Card.Body>
                    <ComponentListProductItemStar star={star} />
                    <Card.Title className='product__name' style={{fontSize: '25px', fontWeight: 'bolder'}}>{name}</Card.Title>
                    <Card.Text>
                    {/* <p className='product_name'>Type: {typeName}</p>
                    <p className='product_name'>Brand: {brandName}</p> */}
                    <p className='product_price'>Price: {price}đ</p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            </Link>
            {/* <Link to={`/${id}`} style={{textDecoration: 'none'}}>
                <div className='product'>

                    <div className='product_img'>
                        <img className='product__img' src={image} alt='no_image' />
                    </div>

                    

                    <p className='product__name'>Name: {name}</p>
                    <p className='product_name'>Type: {typeName}</p>
                    <p className='product_name'>Brand: {brandName}</p>
                    <p className='product_price'>Price: {price} đ</p>


                </div>
            </Link> */}
        </Col >
    );
}

export default ComponentListProductItem;