import React, {memo} from 'react';
import ComponentHeader from './TopHeader/ComponentHeader';
import ComponentNarBar from './Navbar/ComponentNarBar';


function Header(props) {
    return (
        <>  
            <ComponentHeader />
            <ComponentNarBar />
        </>
    );
}

export default memo(Header);