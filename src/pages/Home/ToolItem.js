import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Purchase from './Purchase';

const ToolItem = ({ tool }) => {
    // const [tools, setTools] = useState(null);
    const { _id, name, price, description, minimum_order_quantity, img, available_quantity } = tool;
    const navigate = useNavigate();

    const navigateToPurchasePage = _id => {
        navigate(`/purchase/${_id}`);
    }
    

    return (
        <div className="p-1 lg:px-5 w-full">
            <img alt={name} className="object-cover object-center w-full block" src={img} />
            <div className="mt-4 text-center px-0 lg:px-7">
                <h2 className="text-gray-900 text-xl font-medium">{name}</h2>
                <p className="mt-1 text-base font-medium">{description}</p>
                <p className="mt-1 text-base font-medium">Price: ${price}</p>
                <p className="mt-1 text-base font-medium">Available Quantity : {available_quantity}</p>
                <p className="mt-1 text-base font-medium">Minimum Order Quantity : {minimum_order_quantity}</p>
            </div>
            <button onClick={() => navigateToPurchasePage(tool._id)} className='btn btn-primary w-full text-white my-5'>Buy now</button>

           
        </div>

    );
};

export default ToolItem;