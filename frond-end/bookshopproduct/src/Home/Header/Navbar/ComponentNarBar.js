import React, { memo, useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import './ComponentNarBar.css'
import logo from '../../../Assets/bookshop1.png'

import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { actionFetchFilterAPI, actionFetchListProductAPI } from '../../../Redux/Action/ActionlistProduct';

function ComponentNarBar(props) {
    //todo khai bao ham useDispatch
    let dispatchRedux = useDispatch();
    // todo ham xu ly filter
    const handleAll = () => {
        dispatchRedux(actionFetchListProductAPI());
    }
    const handleFilter = (nameFilter) => {
        dispatchRedux(actionFetchFilterAPI(nameFilter));
    }
    // const[fix, setFix] = useState(true);

    // function setFixed(){
    //     if(window.scrollY >= 300){
    //         setFix(false)
    //     } else{
    //         setFix(true)
    //     }
    // }
    // window.addEventListener("scroll", setFixed)

    return (
        <div>
            <Navbar className='narbar_top'>
                {/* <MDBNavbar fixed='top' className='narbar_top'> */}
                <img src={logo} alt='no img' style={{ width: '80px', height: '80px' }} className='logo' />
                <Container>
                    <Navbar.Brand href="#home" >
                        <h1><b>BOOK SHOP</b></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="narbar_top_left Link texteffect">
                            <ul>

                                <li>
                                    <Link to={"/"} style={{ textDecoration: 'none', marginLeft: '60px' }}>HOME</Link>
                                </li>
                                <li>
                                    <Link to={"/Profile"} style={{ textDecoration: 'none', marginLeft: '60px' }}>FROFILE</Link>
                                </li>
                                {/* <li><Link to={"/listproduct"} style={{ textDecoration: 'none' }}>PRODUCT</Link></li> */}
                                <li>
                                    <Link to={"/listproduct"}>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret style={{ color: 'blueviolet' }}>
                                                PRODUCT
                                            </DropdownToggle>
                                            <DropdownMenu right style={{ fontFamily: '-moz-initial', textDecoration: 'none' }}>
                                                <DropdownItem onClick={handleAll}>Tất cả</DropdownItem>
                                                <DropdownItem onClick={() => handleFilter("NXB Kim Đồng")}>NXB Kim Đồng</DropdownItem>
                                                <DropdownItem onClick={() => handleFilter("NXB Trẻ")}>NXB Trẻ</DropdownItem>
                                                <DropdownItem onClick={() => handleFilter("NXB IPM")}>NXB IPM</DropdownItem>
                                                <DropdownItem  divider />
                                                <DropdownItem onClick={handleAll} >Reset</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Link>
                                </li>
                            </ul>

                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="narbar_top_right ">
                        <ul>

                            <li className='Link'>
                                <Link to={`/checkBox`} >
                                    <FaShoppingCart style={{ fontSize: '41px', marginRight: '20px' }} />
                                </Link>
                            </li>

                            <li className='Link'>
                                {/* <GiArchiveRegister/> */}
                                <Link to={"/register"} style={{ textDecoration: 'none' }} ><span style={{ fontSize: '30px' }}>Register</span></Link>
                            </li>


                        </ul>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/* </MDBNavbar> */}
        </div>
    );
}

export default memo(ComponentNarBar);