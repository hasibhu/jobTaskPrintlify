// import React from 'react';
// import vid from '../assets/jobTaskVid.mov';
// import { FaRegCirclePlay } from "react-icons/fa6";


// const Hero = () => {

//      const [showVideo, setShowVideo] = useState(false); // State to toggle the YouTube video

//     // Function to handle button click
//     const handleVideoPlay = () => {
//         setShowVideo(true);
//     };
//     return (
//         <div className='flex justify-between items-center mx-auto ml-16'>
//             {/* text part  */}
//             <div className='w-11/12'>
//                 <h1 className='text-4xl  font-semibold'>Create and sell custom products</h1>
//                 <p>100% Free to use </p>
//                 <p>900+ High Quality Products</p>
//                 <p>Largely global print network </p>

//                 <div className='mt-10 '>
//                     <button className='btn bg-green-500 h-[52px] w-[150px] text-white rounded-md mr-6'>Start for free</button>

//                     {/* <button className='btn bg-white h-[50px] border-gray-600 text-black rounded-md '> <FaRegCirclePlay className='font-bold' /> How It Works?</button> */}
//                     {/* Button to play YouTube video */}
//                     <button 
//                         className='btn bg-white h-[50px] border-gray-600 text-black rounded-md flex items-center gap-2' 
//                         onClick={handleVideoPlay}
//                     > 
//                         <FaRegCirclePlay className='font-bold' /> 
//                         How It Works?
//                     </button>
//                 </div>
//             </div>

//                 {/* animation part  */}
//             <div>
//                 <video 
//                     className=''
//                     src={vid} 
//                     autoPlay 
//                     loop 
//                     muted 
//                     playsInline 
//                     style={{
//                         width: '80%',
//                         height: 'auto',
//                         objectFit: 'cover',
//                         border: 'none',
//                         outline: 'none'
//                     }}
//                 />
//             </div>

//             {/* YouTube video modal/section */}
//             {showYouTube && (
//                 <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
//                     <div className='relative w-full max-w-4xl h-auto'>
//                         <iframe
//                             width="100%"
//                             height="500px"
//                             src="https://www.youtube.com/embed/rVJ9prsurCI?autoplay=1"
//                             title="YouTube video player"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>

//                         {/* Close button */}
//                         <button
//                             className='absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full'
//                             onClick={() => setShowYouTube(false)}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//        </div>
//     );
// };

// export default Hero;



import React, { useState } from 'react';
import vid from '../assets/jobTaskVid.mov';
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";
<IoCheckmarkOutline />

const Hero = () => {
    const [showYouTube, setShowYouTube] = useState(false); // State to show/hide YouTube video

    // Function to handle button click
    const handleVideoPlay = () => {
        setShowYouTube(true); // Show YouTube video when button is clicked
    };

    return (
        <div className='lg:flex justify-between items-center mx-auto ml-16 gap-4'>
            {/* text part */}
            <div className='w-11/12'>
                <h1 className='text-6xl font-semibold py-6'>Create and sell custom products</h1>
                <div className='flex items-center'>
                    <IoCheckmarkOutline className='text-green-600 text-3xl font-extrabold' />
                    <p>100% Free to use</p>
                </div>
                <div className='flex items-center'>
                    <IoCheckmarkOutline className='text-green-600 text-3xl font-extrabold' />
                    <p>900+ High Quality Products</p>
                </div>
                <div className='flex items-center'>
                    <IoCheckmarkOutline className='text-green-600 text-3xl font-extrabold' />
                    <p>Largely global print network</p>
                </div>
              

                <div className='mt-10 flex'>
                    <button className='btn bg-green-500 h-[52px] w-[150px] text-white rounded-md mr-6'>
                        Start for free
                    </button>

                    {/* Button to play YouTube video */}
                    <button 
                        className='btn bg-white h-[50px] border-gray-600 text-black rounded-md flex items-center gap-2' 
                        onClick={handleVideoPlay}
                    > 
                        <FaRegCirclePlay className='font-bold' /> 
                        How It Works?
                    </button>
                </div>
                <p className='text-green-600 font-semibold py-3'>Trusted by over 8M sellers around the world</p>
            </div>

            {/* animation part - KEEP THIS UNCHANGED */}
            <div className='mt-5'>
                <video
                    className=''
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '80%',
                        height: 'auto',
                        objectFit: 'cover',
                        border: 'none',
                        outline: 'none',
                    }}
                />
            </div>

            {/* YouTube video modal/section */}
            {showYouTube && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
                    <div className='relative w-full max-w-4xl h-auto'>
                        <iframe
                            width="100%"
                            height="500px"
                            src="https://www.youtube.com/embed/rVJ9prsurCI?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        {/* Close button */}
                        <button
                            className='absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full'
                            onClick={() => setShowYouTube(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
