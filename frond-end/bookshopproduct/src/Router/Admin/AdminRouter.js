// import React from 'react';
// import { ROUTERS } from '../router';
// import CartProductContainer from '../../Container/CartProductContainer';
// import ImagePage from '../../image/imagePage';
// import Layout from '../../Container/Layout';
// import { Route, Routes, useNavigate } from 'react-router-dom';

// function AdminRouter(props) {
//     let navigate = useNavigate();
//     const adminRouter = [
//         {
//             path: ROUTERS.ADMIN.CheckProductBuy,
//             component: <CartProductContainer/>
//         },
//         {
//             path: ROUTERS.ADMIN.Image,
//             component: <ImagePage/>
//         },
//     ]
//     let user_LocalStorage = JSON.parse(localStorage.getItem("user_LocalStorage"));
//     return (
//         <Layout>
//             <Routes>
            
//             { !user_LocalStorage? navigate("/login"):
//                 adminRouter.map(item => {
//                     return(
//                         <Route key={item.path} path={item.path} element={item.component} />
//                     );
//                 })
//             }

//             </Routes>
//         </Layout>
//     );
// }

// export default AdminRouter;