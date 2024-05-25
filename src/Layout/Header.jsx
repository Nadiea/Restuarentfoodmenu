import { BiCartAdd } from "react-icons/bi"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";


function Header() {
    const {cart} = useContext(CartContext);
 
    const cartlength=cart.length
    console.log(cartlength);
  return (
    <div>
     <div className=" bg-slate-100 container h-16 flex justify-between p-4 text-center  ">

<div className=" font-bold text-3xl text-red-700 flex justify-center  items-center">REstuarent</div>
<div className="font-bold text-xl text-red-700 flex justify-center  items-center">
    <ul className=" flex space-x-4">
       <Link to="/"> <li>Home</li></Link>
       <Link to="/product"> <li>Foods</li></Link>
       <Link to="/gallery"> <li>Food Gallery</li></Link>
        <li> Contact</li>
    </ul>
</div>
<Link to="/cart"><div className=" text-red-700 flex">
    <BiCartAdd size={36}/>
    <span className=" bg-red-200 rounded-full w-8 h-8 font-bold  text-center">{cartlength}</span>
</div></Link>

 
     </div>
    </div>
  )
}

export default Header
