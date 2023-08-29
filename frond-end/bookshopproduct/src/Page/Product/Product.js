import React from 'react';
import ComponentListProduct from '../../Home/List_product/ComponentListProduct';
import { Container } from 'reactstrap';
import ComponentFilter from '../../Home/List_product/FilterAndSearch/ComponentSort';
import ComponentText from '../../Home/Banner/ComponentText';

function Product(props) {
    return (
        <>
         <img src="https://theme.hstatic.net/200000017360/1000763157/14/share_fb_home.png?v=150" alt='no img' style={{width:'100%'}}/>
        <Container style={{marginTop: '50px'}}>
            <ComponentText/>
            <ComponentFilter/>
            <ComponentListProduct/>
        </Container>
        </>
    );
}

export default Product;