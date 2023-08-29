import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from 'reactstrap';
import './ComponentProductDetail.css'
import { useDispatch } from 'react-redux';
import { addProductCart } from '../../Redux/Action/ActionCart';
import ComponentCartAmountToggle from './ComponentCartAmountToggle';
// import './../../Json/detailProject.json'


function ComponentProductDetail({id}) {
    let navigate = useNavigate();
    // const { t } = useTranslation("detailProject")

    // todo khai bao bien su dung thay doi bien id
    const params = useParams();

    //todo khai bao product detail de luu chuong trinh
    let [productDetail, setProductDetail] = useState([]);

    // todo call api product by id
    useEffect(() => {
        axios.get(`http://localhost:8075/api/v1/products/${params.id}`).then((response) => {
            console.log(response.data);
            setProductDetail(response.data);
        })
    }, [params.id])
    console.log("productDetail",productDetail.image);

    //todo khai bao useDispatch
    let dispatchRedux = useDispatch()

    //!truyen bien chua data cua product(productDetail) vao event onClick thong qua ham handleButtonAddCart
    //! -> dispatch trong ham handleButtonAddCart voi data dau vao tren ->action
    const handleButtonAddCart = (productCart) => {
        // kiem tra admin da dang ki tk chua ?
        let user_LocalStorage = JSON.parse(localStorage.getItem("user_LocalStorage"));
        // neu admin chưa dk tai khoan => chuyen sang trang dki tai khoan (register)
        if (!user_LocalStorage) {
            alert("Vui lòng đăng nhập tài khoản")
            navigate("/login")
        } else {
            let productCartUpdate = {
                ...productCart,
                qty: amount
            }
            dispatchRedux(addProductCart(productCartUpdate))
            alert("Đã thêm sản phẩm vào giỏ hàng")
            navigate("/checkBox");
        }
        
       
    }

    //todo khai bao bbien amount de dem gia tri
    let [amount, setAmount] = useState(1)

    //todo khai bao ham  changeAmount
    let onChangeAmount = (amount, id) => {
        setAmount(amount);
    }


    return (
        <>
            <img src="https://theme.hstatic.net/200000017360/1000763157/14/share_fb_home.png?v=150"
                alt="no_image"
                style={{ height: "400px", width: "100%" }} />
            <Container style={{ marginTop: '50px' }}>
                <br /><br />
                <Row>
                    <h1 style={{textAlign: 'center'}}><b>INFORMATION PRODUCT</b></h1><br />
                    {' '}
                    <Col sm={6}>
                    <br /><br />
                        <img src={productDetail.image} alt='no_image' className='productImg' />
                    </Col>
                    <Col sm={6} style={{ textAlign: 'left' }}>
                    <br /><br />
                        <ul style={{listStyle: 'none'}}>
                            <li>
                                <h3 className=''><b>{productDetail.name}</b></h3>
                            </li><br/>
                            <li>
                                <p className=''> Brand: <b>{productDetail.brandName}</b></p>
                            </li>
                            <li>
                                <p className=''> Type: <b>{productDetail.typeName}</b></p>
                            </li>
                            <li>
                                <p className=''> Price: <b>{productDetail.price}đ</b></p>
                            </li>
                            <li>
                               <ComponentCartAmountToggle id ={productDetail.id} limit= {productDetail.stock} amount={amount} onChangeAmount={onChangeAmount}/>
                            </li>
                            <li>
                                {/* <p className=''>Mô tả sản phẩm : {t("detail.Content")}</p> */}
                                <p className='' style={{padding: 'auto'}}><i>Mô tả sản phẩm</i> : Cuộc gặp gỡ giữa Katsuki Satoyama và Katsuki Mizutani, hai người có cùng niềm đam mê về boxing. Đối đầu và trở thành bạn. Câu chuyện bắt đầu bằng việc nhân vật nam là Satoyama Katsuki yêu thầm cô bạn cùng lớp là Mizutani Katsuki, và cậu ta đã tình cờ phát hiện ra việc cô bạn của mình ngoài giờ học còn làm thêm ở tiệm rửa xe để giúp mẹ. Cô bé Katsuki có người cha là chủ của câu lạc bộ quyền anh Mizutani trước trạm xe Sumi, ông từng là vô địch quyền anh Đông Á, con gái cô bé Katsuki cũng có năng khiếu về quyền anh. Vì muốn theo đuổi bạn gái nên cậu con trai ông cũng đã Satoyama Katsuki đăng ký học quyền anh ở câu lạc bộ quyền anh Mizuta, đây là nguyên nhân để bắt đầu những xảy ra những sự việc giữa cậu và môn quyền anh.</p>
                            </li>
                        </ul><br/>

                        {/* <p className=''>- Name: {productDetail.name}</p>
                        <p className=''>- Brand: {productDetail.brandName}</p>
                        <p className=''>- Type: {productDetail.typeName}</p>
                        <p className=''>- Price: {productDetail.price}</p>

                        <p className='Title'>Mô tả sản phẩm : thêm sau</p> */}
                        <Button color="secondary" style={{marginLeft: '250px'}} onClick={() => handleButtonAddCart(productDetail)}>Add to cart</Button>
                       
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default ComponentProductDetail;