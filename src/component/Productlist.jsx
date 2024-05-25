import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function Productlist() {
  const { product, cart, setCart } = useContext(CartContext);
  console.log(product);
  useEffect(() => {
    AOS.init();
  }, [])
  

  //addtocart

  const addtocart = (item) => {
    const newcart = [...cart];
    const cartItem = newcart.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      newcart.push({ ...item, quantity: 1 });
    }

    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
  };

  //increament
  const increament = (item) => {
    const newcart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
  };
//decrement

const decreament = (item) => {
 const newcart = cart.map((cartItem) => 

    cartItem.id === item.id ? {
        ...cartItem , quantity:cartItem.quantity - 1
    } : cartItem
).filter((cartItem) => cartItem.quantity > 0 )

setCart(newcart);
localStorage.setItem("cart" , JSON.stringify(newcart));


}
  return (
    <div>
      <div className=" container">
        <h1 className="text-2xl font-bold flex justify-center mt-10 mb-5">
          Food List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {product?.recipes?.map((item) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item.id);

            return (
              <div key={item.id}   
              data-aos="fade-up"
              data-aos-duration="3000" className="bg-slate-400 m-2 p-4 rounded">
                <div>
                  <img
                    src={item.image}
                    alt="food"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <div className="mt-2 text-center font-semibold">
                  {item.name}
                </div>
                <div className="mt-2 text-center font-semibold">
                  ${item.userId}
                </div>

                <div className=" flex justify-between mt-3">
                  {cartItem && cartItem.quantity > 0 ? (
                    <div className=" flex space-x-3">
                      <span
                        onClick={() => increament(item)}
                        className=" font-bold bg-blue-800 rounded-md "
                      >
                        <BsPlus size={36} />
                      </span>
                      <span className=" font-bold text-2xl">
                        {cartItem.quantity}
                      </span>
                      <span
                        onClick={() => decreament(item)}
                        className=" font-bold bg-red-800 rounded-md "
                      >
                        <BiMinus size={36} />
                      </span>
                    </div>
                  ) : (
                    <div
                      onClick={() => addtocart(item)}
                      className=" py-2 px-3 bg-slate-600 font-bold hover:bg-slate-300 cursor-pointer rounded-md"
                    >
                      Add to Cart
                    </div>
                  )}

                 <Link to={`/product/${item.id}`}> <div className=" py-2 px-3 bg-slate-600 font-bold  hover:bg-slate-300  cursor-pointer rounded-md">
                    View
                  </div></Link>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Productlist;
