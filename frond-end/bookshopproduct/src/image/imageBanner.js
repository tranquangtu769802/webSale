import React from 'react';
import banner1 from '../Assets/Banner/draw1.webp'
import banner2 from '../Assets/Banner/draw2.webp'
import banner3 from '../Assets/Banner/banner4.jpg'
import banner4 from '../Assets/Banner/banner5.jpg'
import banner5 from '../Assets/Banner/banner6.jpg'
import UploadImage from './UploadImage';
import './imageBanner.css'

function ImageBanner(props) {
    return (
        <>
            <img src={banner1} alt='katsu1' className='img' />
            <img src={banner2} alt='katsu2' className='img' />
            <img src={banner3} alt='katsu3' className='img' /> 
            <img src={banner4} alt='katsu3' className='img' /> 
            <img src={banner5} alt='katsu3' className='img' />
            <UploadImage/> 
        </>
    );
}

export default ImageBanner;