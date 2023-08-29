import React, { useEffect, useState, memo } from 'react';
// import banner1 from '../../Assets/banner1.jpg'
// import banner2 from '../../Assets/banner2.png'
// import banner3 from '../../Assets/banner3.jpg'
// import banner4 from '../../Assets/banner4.jpg'
// import banner5 from '../../Assets/banner5.jpg'
import banner1 from '../../Assets/Banner/banner4.jpg'
import banner2 from '../../Assets/Banner/banner5.jpg'
import banner3 from '../../Assets/Banner/banner6.jpg'
import './Banner_CSS/ComponentBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function ComponentBanner(props) {

    // let banners = [banner1, banner2, banner3];
    // // // let logo = [banner4, banner5];
    // let [counter, setCounter] = useState(0);

    // // // ham thay goi anh
    // const changeBanner = () => {
    //     setCounter(prev => (prev + 1) % 3 )  // de counter trong khoang tu 0 -> 2
    // }

    // // ham thoi gian cu 1s chay: khi ham iterval phai co ham clear
    // useEffect(() => {
    //     // viet ham setinterval
    //     let timeChange = setInterval(() => {changeBanner()}, 5000);

    //     return () => {
    //         clearInterval(timeChange);
    //     }
    // }, [])
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        // <div className='banner'>
        //     {/* <img  src={logo[0]} className='center' alt='no_image'/> */}
        //     <img  src={banners[counter]} className='center' alt='no_image'/>
        //     {/* <img  src={logo[1]} className='center' alt='no_image'/> */}

        //  </div>

        // <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src={banners[counter]} className="d-block w-100" alt="Wild Landscape" />
        //         </div>
        //     </div>
        // </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            
            <Carousel.Item>
                <img src={banner1} alt='banner1' className='center'/>
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={banner2} alt='banner2' className='center'/>
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={banner3} alt='banner3' className='center'/>
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default memo(ComponentBanner);