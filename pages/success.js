import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../Context/StateContext'
import { successCanvas } from '../lib/utils'

const success = () => {
    const { setTotalQuantities, setTotalPrice, setCartItem } = useStateContext()
    const [order, setOrder] = useState(null)

    useEffect(() => {
        localStorage.clear()
        setCartItem([])
        setTotalPrice(0)
        setTotalQuantities(0)
        successCanvas()
    }, [])


    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Done, your welcom, come again</h2>
                <p className='email-msg'>check your email inbox for the receipt</p>
                <p className='description'>If you have any questions, please email <a className='email' href='mailto:order@example.com'>order@example.com</a></p>
                <Link href='/'>
                    <button className='btn' type='button' width='250' onClick=''>
                        Complete shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default success