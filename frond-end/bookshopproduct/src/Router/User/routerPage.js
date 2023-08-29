import React from 'react';
import ProductContainner from '../../Container/ProductContainner';
import ProductHomeContainer from '../../Container/ProductHomeContainer';
import {Routes, Route  } from "react-router-dom";
import LoginContainner from '../../Container/LoginContainner';
import RegisterContainer from '../../Container/RegisterContainer';
import ComponentProductDetail from '../../Home/List_product/ComponentProductDetail';
import { ROUTERS } from '../router';
import Layout from '../../Container/Layout';
import ImagePage from '../../image/imagePage';
import Product from '../../Page/Product/Product';
import CartProductContainer from '../../Container/CartProductContainer';
import ImageTopic from '../../image/imageTopic';
import ImageBanner from '../../image/imageBanner';

function routerPage(props) {
    const userRouter = [
        {
            path: ROUTERS.USERS.Home,
            component: <ProductHomeContainer />
        },
        {
            path: ROUTERS.USERS.Product,
            component: <ProductContainner />
        },
        {
            path: ROUTERS.USERS.Login,
            component: <LoginContainner />
        },
        {
            path: ROUTERS.USERS.Register,
            component: <RegisterContainer />
        },
        {
            path: ROUTERS.USERS.ProductDetail,
            component: <ComponentProductDetail />
        },
        {
            path: ROUTERS.ADMIN.CheckProductBuy,
            component: <CartProductContainer/>
        },
        {
            path: ROUTERS.ADMIN.ImageProduct,
            component: <ImagePage/>
        },
        {
            path: ROUTERS.USERS.List_Product,
            component: <Product/>
        },
        {
            path: ROUTERS.ADMIN.ImageTopic,
            component: <ImageTopic/>
        },
        {
            path: ROUTERS.ADMIN.ImageBanner,
            component: <ImageBanner/>
        },
    ]
    
    return (
        <Layout>
            <Routes>
            {
                userRouter.map(item => {
                    return(
                        <Route key={item.path} path={item.path} element={item.component} />
                    );
                })
            }

                {/* <Route path='/' element={<ProductHomeContainer />}></Route>
                <Route path='/:id' element={<ComponentProductDetail />}></Route>
                <Route path='/product' element={<ProductContainner />}></Route>
                <Route path='/login' element={<LoginContainner />}></Route>
                <Route path='/register' element={<RegisterContainer />}></Route> */}
            </Routes>
        </Layout>
    );
}

export default routerPage;