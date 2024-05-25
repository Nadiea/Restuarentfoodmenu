import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { useParams } from "react-router-dom";

export default function Productview() {
  const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();
  const [productView, setProductView] = useState(null);

  // addtocart
  const addtocart = (productView) => {
    const newcart = [...cart];
    const cartItem = newcart.find((cartItem) => cartItem.id === productView.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      newcart.push({ ...productView, quantity: 1 });
    }
    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
  };
//increament
const increament = (productView) => {
const newcart = cart.map((cartItem) => cartItem.id === productView.id ? 
{ ...cartItem , quantity:cartItem.quantity + 1 }: cartItem)

setCart(newcart);
localStorage.setItem("cart",JSON.stringify(newcart));





}

//decreament
const decreament = (productView) => {
  const newcart = cart.map((cartItem) => cartItem.id === productView.id ? 
{ ...cartItem , quantity:cartItem.quantity - 1 }: cartItem) .filter((cartItem) => cartItem.quantity > 0 )

setCart(newcart);
localStorage.setItem("cart",JSON.stringify(newcart));

  
}










  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setProductView(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="grid container p-10 w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
            {productView && (
              <img
                src={productView.image}
                alt={productView.name}
                className="object-cover object-center"
              />
            )}
          </div>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          {productView && (
            <>
              {(() => {
                const cartItem = cart.find(
                  (cartItem) => cartItem.id === productView.id
                );
                return (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {productView.name}
                    </h2>
                    <section
                      aria-labelledby="information-heading"
                      className="mt-3"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>
                      <p className="text-lg mb-3 text-gray-900">
                        {productView.ingredients}
                      </p>
                      <p className="text-xl font-semibold text-gray-900">
                        Price :${productView.userId}
                      </p>
                    </section>
                    <section aria-labelledby="options-heading" className="mt-6">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>
                      <form>
                        {cartItem && cartItem.quantity > 0 ? (
                          <div className=" flex space-x-3">
                            <span
                              onClick={() => increament(productView)}
                              className=" font-bold bg-blue-800 rounded-md "
                            >
                              <BsPlus size={36} />
                            </span>
                            <span className=" font-bold text-2xl">
                              {cartItem.quantity}
                            </span>
                            <span
                              onClick={() => decreament(productView)}
                              className=" font-bold bg-red-800 rounded-md "
                            >
                              <BiMinus size={36} />
                            </span>
                          </div>
                        ) : (
                          <div className="mt-6">
                            <button
                              onClick={() => addtocart(productView)}
                              type="submit"
                              className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                              Add to bag
                            </button>
                          </div>
                        )}
                      </form>
                    </section>
                  </>
                );
              })()}
            </>
          )}
        </div>
      </div>
    </>
  );
}
