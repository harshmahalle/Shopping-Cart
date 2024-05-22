import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="bg-gray-200 p-4 mt-4 flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold">Cart Empty</h1>
          <Link to={'/'} className="text-blue-500 mt-2 inline-block">
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


