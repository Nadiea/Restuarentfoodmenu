function Total() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartItems);

    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.quantity * item.userId;
    }, 0);

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900 mb-3"
            >
                Order summary
            </h2>

            <dl>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">
                        Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                        ${totalAmount.toFixed(2)}
                    </dd>
                </div>
            </dl>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                    Checkout
                </button>
            </div>
        </section>
    );
}

export default Total;
