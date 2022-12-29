import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { authContext } from '../UserContext';

const Orders = () => {
    const { initialCart } = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    const { user } = useContext(authContext);

    return (
        <>

            <h2 className='text-center text-2xl'>Orders for <span style={{color:'gray'}}>{user?.displayName}</span> </h2>
            <div className='shop-container'>
                <div className='orders-container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop more</Link></h2>
                    }
                </div>
                <div className='cart-container'>
                    <Cart clearCart={clearCart} cart={cart}>
                        {/*I am using different way  */}
                        {/* <Link to='/shipping'>
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Proceed shipping</button>
                            </Link>      */}
                    </Cart>
                </div>
            </div>

        </>
    );
};

export default Orders;