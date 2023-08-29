import React, {memo} from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/footer';

const Layout = ({children, ...props}) => {
    //*biến children khi gọi đến masterlayout thì tất cả các thay đổi bên ngoài sẽ đc truyền vào biến children (ví dụ như homePage hay nhưng page khác sau này)
    return (
        <div {...props}>
            <Header />
            {children}
            <br/><br/>
            <Footer />
        </div>
    );
}

export default memo(Layout);