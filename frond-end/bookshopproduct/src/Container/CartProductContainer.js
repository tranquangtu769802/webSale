import React from 'react';
import ComponentListCart from '../Cart/ComponentListCart';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductCart, updateProductCart } from '../Redux/Action/ActionCart';


function CartProductContainer(props) {

    //todo lay list product trong cart
    let listCart = useSelector((stateRedux) => stateRedux.listCartState.listCart)

    //Todo khai bao useDispatch de xu ly action add & delete
    const dispatchRedux = useDispatch()

    //todo viet ham onChangAmount
    let onChangeAmount = (amount, id) => {
        const product = listCart.find(item => item.id === id);
        if (product) {
            const productUpdateStock = {
                ...product,
                qty: amount
            }
            dispatchRedux(updateProductCart(productUpdateStock))
        }
    }

    //todo khai bao ham delete productCart
    let onHandleDeleteCart = (itemCart) => {
        dispatchRedux(deleteProductCart(itemCart));
    }

    //Todo khai bao ham tinh tong so tien san pham trong gio hang
    const total = listCart.reduce((price, product) => {
        return price + product.price * product.qty;
    }, 0)

    return (
        <div>
            <ComponentListCart onChangeAmount={onChangeAmount} onHandleDeleteCart={onHandleDeleteCart} total={total}/>
        </div>
    );
}

export default CartProductContainer;