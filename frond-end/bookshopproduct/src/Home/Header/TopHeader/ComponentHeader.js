// import React, { memo } from 'react';
import React, { memo, useState } from 'react';
import './ComponentHeader.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { TbMailQuestion } from "react-icons/tb";
import { BiImages } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button, Input, InputGroup, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { actionFetchSearchProductAPI } from '../../../Redux/Action/ActionlistProduct';
function ComponentHeader() {
    let [search, setSearch] = useState("")

    //todo khai bao ham useDispatch
    let dispatchRedux = useDispatch()

    //! nhap du lieu bang onChange-> setSearch nhan data dc nhap -> cap nhat lai gia tri bien search
    //! ham handleSearch nhan gia tri bien search ->dispatch -> action
    //todo xu li search
    const handleSearch = (search) => { // search: 2
        dispatchRedux(actionFetchSearchProductAPI(search)) //2
    }

    return (
        <div className='header_top'>
            <>
                <div className='row'>
                    <div className='col-6 header_top_left' >
                        <ul>
                            <li>
                                <AiOutlineMail />
                                <span>tranquangtu0498@gmail.com</span>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <li style={{marginRight:'20px'}} >
                                <InputGroup>
                                    <Button type="submit" onClick={() => handleSearch(search)}>Search</Button>
                                    <Input
                                        type='text'
                                        placeholder='Search name ...'
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </InputGroup>
                            </li>
                            <li>
                                <Link to={"/imageTopic"}>
                                    <BiImages />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <TbMailQuestion />
                                </Link>
                            </li>
                            <li>
                                <AiOutlineUser />
                                <Link to={"/login"} style={{ textDecoration: 'none' }} className='Link'>
                                    <span style={{fontFamily:'cursive'}}><b>Login</b></span>
                                </Link>

                            </li>
                            {/* <li>
                                <Link to={"/register"}>
                                    <span>Đăng ký</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </>

        </div>

    );
}

export default ComponentHeader;