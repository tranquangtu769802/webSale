import React from 'react';
import ComponentListProductItemStar_Lisght from './ComponentListProductItemStar_Light';
import ComponentListProductItemStar_Dark from './ComponentListProductItemStar_Dark';

function ComponentListProductItemStar({star}) {

    const stars = [];

    for (let i = 0;  i < 5;  i++) {
       if (i < star) {
        stars.push(<ComponentListProductItemStar_Lisght key={i}/>)
       }else {
        stars.push(<ComponentListProductItemStar_Dark key ={i}/>)
       }
        
    }
    return (
        <div >
            {stars}
        </div>
    );
}

export default ComponentListProductItemStar;