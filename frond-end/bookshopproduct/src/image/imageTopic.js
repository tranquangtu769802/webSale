import React from 'react';
import './imagePage.css'
import { Link } from 'react-router-dom';
function ImageTopic(props) {
    return (
        <>
            <Link to={"/imageBanner"} className='link'>
                <div className='imageTopic topic1 ' ><h1>Banner</h1></div><br />
            </Link>
            <Link to={"/imageProduct"} className='link'>
                <div className='imageTopic topic2'><h1>List Product</h1></div><br />
            </Link>
            <Link to={"/imageLogo"} className='link'>
                <div className='imageTopic topic3'><h1>Logo</h1></div>
            </Link>
        </>

    );
}

export default ImageTopic;