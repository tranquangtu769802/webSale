import React from 'react';
import './imagePage.css'
import katsu1 from '../Assets/List/katsu1.jpg'
import katsu2 from '../Assets/List/katsu2.jpg'
import katsu3 from '../Assets/List/katsu3.jpg'
import katsu4 from '../Assets/List/katsu4.jpg'
import katsu5 from '../Assets/List/katsu5.jpg'
import katsu6 from '../Assets/List/katsu6.jpg'
import katsu7 from '../Assets/List/katsu7.jpg'
import katsu8 from '../Assets/List/katsu8.jpg'
import otbaymau1 from '../Assets/List/otbaymau1.jpg'
import otbaymau2 from '../Assets/List/otbaymau2.jpg'
import otbaymau3 from '../Assets/List/otbaymau3.jpg'
import otbaymau4 from '../Assets/List/otbaymau4.jpg'
import otbaymau5 from '../Assets/List/otbaymau5.jpg'
import otbaymau6 from '../Assets/List/otbaymau6.jpg'
import UploadImage from './UploadImage';




function ImagePage(props) {

    return (
        <>
            <img src={katsu1} alt='katsu1' />
            <img src={katsu2} alt='katsu2' />
            <img src={katsu3} alt='katsu3' />
            <img src={katsu4} alt='katsu4' />
            <img src={katsu5} alt='katsu5' />
            <img src={katsu6} alt='katsu6' />
            <img src={katsu7} alt='katsu7' />
            <img src={katsu8} alt='katsu8' />
            <img src={otbaymau1} alt='otbaymau1' />
            <img src={otbaymau2} alt='otbaymau2' />
            <img src={otbaymau3} alt='otbaymau3' />
            <img src={otbaymau4} alt='otbaymau4' />
            <img src={otbaymau5} alt='otbaymau5' />
            <img src={otbaymau6} alt='otbaymau6' />
            <UploadImage/>
          
        </>
    );
}
export default ImagePage;