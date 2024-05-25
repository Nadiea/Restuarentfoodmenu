import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(()=>{
 const savecart = localStorage.getItem("cart");
 return savecart ? JSON.parse(savecart) : []

    });
    const [product, setProduct] = useState([]);

 
 const fetchData = async() => {

const responsedata=await fetch("https://dummyjson.com/recipes");
const data= await responsedata.json();
setProduct(data);
 

console.log(data);

 }

 useEffect(()=>{
    fetchData()
 },[]);





    const value = { cart, setCart, product, setProduct };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
