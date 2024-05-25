/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
  CheckIcon,
  ClockIcon,
  
  XMarkIcon
} from "@heroicons/react/20/solid";
import { useContext } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import Total from "./Total";

export default function Example() {
  const { cart, setCart } = useContext(CartContext);

  //increament
  const increament = (product) => {
    const newcart = cart.map((cartitem) =>
      cartitem.id === product.id
        ? {
            ...cartitem,
            quantity: cartitem.quantity + 1,
          }
        : cartitem
    );
    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
  };


  //decreament
const decreament = (product) => {
    const newcart= cart.map((cartitem) => cartitem.id === product.id && cartitem.quantity > 1
  ? {...cartitem  , quantity:cartitem.quantity - 1 } : cartitem



).filter((cartitem) => cartitem.quantity > 0)
setCart(newcart);
localStorage.setItem("cart", JSON.stringify(newcart))
}
// remove

const handleremove = (product) => {
    const newcart = cart.filter((cartitem) => cartitem.id !== product.id)

    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
}


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {cart.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt="product"
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>

                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${product.userId}/each
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className=" flex space-x-3">
                          <span
                            onClick={() => increament(product)}
                            className=" font-bold bg-blue-800 rounded-md "
                          >
                            <BsPlus size={36} />
                          </span>
                          <span className=" font-bold text-2xl">
                            {product.quantity}
                          </span>
                          <span
                            onClick={() => decreament(product)}
                            className=" font-bold bg-red-800 rounded-md "
                          >
                            <BiMinus size={36} />
                          </span>
                        </div>
                      </div>
                      <div onClick={() => handleremove(product)} className="absolute right-0 top-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>

                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}

                    <div className=" flex-col">  <p>Quantity : {product.quantity}</p>
                      <span>Subtotal: {product.quantity * product.userId}</span></div>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <Total/>
        </form>
      </div>
    </div>
  );
}
