import React, { useEffect, useState, memo } from 'react';
import ComponentNarBar from '../Home/Header/Navbar/ComponentNarBar';
import ComponentBanner from '../Home/Banner/ComponentBanner';
import ComponentListProduct from '../Home/List_product/ComponentListProduct';
import { Container } from 'reactstrap';
import ComponentText from '../Home/Banner/ComponentText';
import { actionFetchListProductAPI } from '../Redux/Action/ActionlistProduct';
import { useDispatch } from 'react-redux';
import ComponentFilter from '../Home/List_product/FilterAndSearch/ComponentSort';


function ProductHomeContainer(props) {

  //todo khai bao ham usedispatch
  let dispatchRedux = useDispatch();


  let fetchListProduct = () => {

    dispatchRedux(actionFetchListProductAPI())
  }

  useEffect(() => {

    fetchListProduct();
  }, [])

  return (
    <>
      <ComponentBanner />
      <ComponentText />
      <ComponentFilter/>
      <Container>
        <ComponentListProduct />
      </Container>

    </>
  );
}

export default memo(ProductHomeContainer);