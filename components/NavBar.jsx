import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../Context/StateContext'

const NavBar = () => {
    const { showCart, setShowCart, cartItem, totalQuantities } = useStateContext()
    return (
        <div className='navbar-container'>
            <p className='logo'>
                <Link href='/'>Abdalrahman Headphones and tesla s plaid
                </Link>
            </p>
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
        </div>
    )
}

export default NavBar