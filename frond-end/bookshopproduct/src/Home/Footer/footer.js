import React, { memo } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";

function Footer(props) {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ background: 'rgb(241, 237, 197)'}}>
        <div className='me-5 d-none d-lg-block' >
          <span><h5>Get connected with us on social networks:</h5></span>
        </div>

        <div style={{ fontSize: '25px' }}>
          <a href='/' className='me-4 text-reset'>
            <AiOutlineFacebook />
          </a>
          <a href='/' className='me-4 text-reset'>
            <AiFillTwitterCircle />
          </a>
          <a href='/' className='me-4 text-reset'>
            <AiOutlineGoogle />
          </a>
          <a href='/' className='me-4 text-reset'>
            <AiOutlineInstagram />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <GiCutDiamond />
                Company name
              </h6>
              <p>
                Công ty TNHH 1 thành viên
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Coloa, Donganh, Hanoi, Vietnam
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tranquangtu0498@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ background: 'rgb(241, 237, 197)'}}>
        © 2023 Content :
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          mta.edu.vn.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default memo(Footer);