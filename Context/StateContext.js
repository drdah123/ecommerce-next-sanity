import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()


export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let founProduct
    let index

    const onRemove = (product,) => {
        const founProduct = cartItem.find((item) => item._id === product._id)
        const newCartItem = cartItem.filter((item) => item._id !== product._id)

        setTotalPrice((prevPrice) => prevPrice - product.price * product.quantity)
        setTotalQuantities((prevQuantity) => prevQuantity - product.quantity)
        setCartItem(newCartItem)
    }



    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItem.find(item => item._id === product._id)
        setTotalPrice(prevPice => prevPice + product.price * quantity)
        setTotalQuantities(prevQuantity => prevQuantity + quantity)


        if (checkProductInCart) {
            const updateCartItems = cartItem.map((cartProduct) => {
                if (cartProduct._id === cartItem._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }


            })
            setCartItem(updateCartItems)
        } else {
            product.quantity = quantity

            setCartItem([...cartItem, { ...product }])
        }
        toast.success(`${qty} ${product.name} added to cart.`)
    }


    const toggleCartItemQuantity = (id, value) => {
        founProduct = cartItem.find((item) => item._id == id)
        index = cartItem.findIndex((item2) => item2._id == value)

        const newCartItem = cartItem.filter((item) => item._id !== id)

        if (value == 'inc') {
            setCartItem([...newCartItem, { ...founProduct, quantity: founProduct.quantity + 1 }])
            setTotalPrice((prevPrice) => prevPrice + founProduct.price)
            setTotalQuantities((prevQuantity) => prevQuantity + 1)
        } else if (value == 'dec') {
            if (founProduct.quantity > 1) {
                setCartItem([...newCartItem, { ...founProduct, quantity: founProduct.quantity - 1 }])
                setTotalPrice((prevQuantity) => prevQuantity - founProduct.price)
                setTotalQuantities((prevPrice) => prevPrice - 1)
            }
        }
    }


    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItem,
                totalPrice,
                totalQuantities,
                qty,
                decQty,
                incQty,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                setCartItem,
                setTotalPrice,
                setTotalQuantities,
                setShowCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)