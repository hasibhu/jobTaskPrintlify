import React from 'react';

const TshirtPart = () => {
    return (
        <div className='mt-28 pt-28 pb-28 mb-44 lg:flex justify-evenly items-center bg-gray-100 px-auto hidden'>
            <div>
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/custom-products.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>CREATE</h3>
                <h2 className='font-bold text-xl'>custom products</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
            <div className=''>
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/your-products.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>SELL</h3>
                <h2 className='font-bold text-xl'>on your terms</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
            <div>
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/fullfillment.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>WE HANDLE</h3>
                <h2 className='font-bold text-xl'>fulfullment</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
        </div>
    );
};

export default TshirtPart;