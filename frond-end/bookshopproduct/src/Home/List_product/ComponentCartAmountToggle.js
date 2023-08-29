import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { Row } from 'reactstrap';

function ComponentCartAmountToggle({id, limit, amount, onChangeAmount}) {
    
    // todo ham xu ly khi an -
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
        if (amount > 1) {
            amount = amount - 1;
        } else {
            amount = 1;
        }
        onChangeAmount(amount, id)
    }

    // todo ham xu ly khi an +
    const setIncrease = () => {
        // amount < ProductDetail.stock ? setAmount(amount + 1) : setAmount(ProductDetail.stock);
        if (amount < limit) {
            amount = amount + 1;
        } else {
            amount = limit;
        }
        onChangeAmount(amount, id)
    }

    return (
        <Row>
        <div style={{ marginBottom: '15px' }}>
            <button onClick={() => setDecrease()} style={{ marginLeft: '10px' }}><FaMinus /></button>
            <span style={{ fontSize: '20px', marginRight: '10px', marginLeft: '10px' }}>{amount}</span>
            <button onClick={() => setIncrease()}><FaPlus /></button>
        </div>
    </Row>
    );
}

export default ComponentCartAmountToggle;