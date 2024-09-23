


// import AOS from "aos";
// import { useEffect } from "react";
// import "aos/dist/aos.css"; // Ensure AOS styles are imported

// const TshirtPart = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 2000, // Animation duration (optional)
//             once: true, // Animation should happen only once (optional)
//         });
//     }, []);

//     return (
//         <div className='mt-28 pt-28 pb-28 mb-44 flex justify-evenly items-center bg-gray-100 px-auto '>
//             <div data-aos="zoom-in-down">
//                 <img className='w-52' src='https://printify.com/pfh/assets/legacy/custom-products.png' alt="" />
//                 <h3 className='text-green-600 font-bold text-xl'>CREATE</h3>
//                 <h2 className='font-bold text-xl'>custom products</h2>
//                 <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
//             </div>
//             <div data-aos="fade-up">
//                 <img className='w-52' src='https://printify.com/pfh/assets/legacy/your-products.png' alt="" />
//                 <h3 className='text-green-600 font-bold text-xl'>SELL</h3>
//                 <h2 className='font-bold text-xl'>on your terms</h2>
//                 <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
//             </div>
//             <div data-aos="zoom-in-down">
//                 <img className='w-52' src='https://printify.com/pfh/assets/legacy/fullfillment.png' alt="" />
//                 <h3 className='text-green-600 font-bold text-xl'>WE HANDLE</h3>
//                 <h2 className='font-bold text-xl'>fulfillment</h2>
//                 <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
//             </div>
//         </div>
//     );
// };

// export default TshirtPart;


import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const TshirtPart = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration (optional)
            once: true, // Animation should happen only once (optional)
        });
    }, []);

    return (
        <div className='mt-28 pt-28 pb-28 mb-44  justify-evenly items-center bg-gray-100 px-auto hidden lg:flex'>
            <div data-aos="zoom-in-down">
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/custom-products.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>CREATE</h3>
                <h2 className='font-bold text-xl'>custom products</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
            <div data-aos="fade-up">
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/your-products.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>SELL</h3>
                <h2 className='font-bold text-xl'>on your terms</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
            <div data-aos="zoom-in-down">
                <img className='w-52' src='https://printify.com/pfh/assets/legacy/fullfillment.png' alt="" />
                <h3 className='text-green-600 font-bold text-xl'>WE HANDLE</h3>
                <h2 className='font-bold text-xl'>fulfillment</h2>
                <p className='w-[340px]'>Easily add your designs to a wide range of products using our free tools</p>
            </div>
        </div>
    );
};

export default TshirtPart;
