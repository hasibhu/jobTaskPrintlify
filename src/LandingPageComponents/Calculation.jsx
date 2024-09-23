

import Aos from 'aos';
import calc from '../assets/calculation.png';
import { useEffect } from 'react';

const Calculation = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000, // Animation duration (optional)
            once: true, // Animation should happen only once (optional)
        });
    }, []);

    return (
        <div className="mb-28 flex flex-col lg:w-[750px] lg:flex-row">
            <div className="bg-[#203741] p-16 rounded-xl flex-1 relative flex flex-col">
                <h1 className="text-4xl text-white">Make Money, <br /> Risk-Free</h1>
                <p className="text-gray-400 pt-6 pb-6">You pay for fulfillment only when you make a sale</p>

                <div className="bg-[#17262b] p-8 rounded-lg lg:w-[450px]">
                    <div className='flex gap-40 p-2'>
                        <p className="text-white">You sell a t-shirt</p>
                        <p className="text-white">$ 30</p>
                    </div>
                    <div className='flex gap-24 pb-4 p-2'>
                        <p className="text-white">You pay for its production</p>
                        <p className="text-white">$ 12</p>
                    </div>
                    
                    <hr />
                    <div className='mt-2 flex gap-44'>
                        <p className="text-green-500 text-xl font-bold">Your Profit</p>
                        <p className="text-green-500 text-xl font-bold ml-3">$ 18</p>
                    </div>
                </div>

                <button className='btn bg-green-600 text-white border-none mt-10 w-44'>Start Selling</button>
                <p className='text-gray-400 pt-7'>100% Free to use · 900+ Products · Largest print network</p>
            </div>

            <img
                data-aos="fade-left"
                src={calc}
                alt=""
                className="absolute right-0 transform -translate-y-1/2 lg:h-[560px] lg:w-2/5 object-contain hidden lg:block" 
            />
        </div>
    );
};

export default Calculation;
