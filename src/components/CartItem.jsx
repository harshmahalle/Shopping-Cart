import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
import { FcDeleteDatabase } from 'react-icons/fc';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item Removed');
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = item.description.length > 100
    ? item.description.substring(0, 100) + '...'
    : item.description;

  return (
    <div className="bg-white p-4 mb-4 shadow-md rounded-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <img src={item.image} className="h-[140px] w-[250px]" alt={item.title} />
        </div>
        <div className="ml-4 flex-grow">
          <h1 className="text-lg font-bold">{item.title}</h1>
          <p className="text-gray-600">
            {showFullDescription ? item.description : truncatedDescription}
          </p>
          {item.description.length > 100 && (
            <button 
              onClick={toggleDescription} 
              className="text-blue-500 underline mt-2">
              {showFullDescription ? 'Hide' : 'See more'}
            </button>
          )}
          <div className='flex flex-row mt-3 gap-5'>
            <p className="text-lg font-bold">${item.price}</p>
            <div className="cursor-pointer" onClick={removeFromCart}>
              <FcDeleteDatabase className="text-red-500 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;






