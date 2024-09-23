import small from '../assets/allProdSmall.png'
import big from '../assets/allProdBig.png'
import { FaArrowRight } from "react-icons/fa6";


const AllProducts = () => {
    return (
        <div className=' '>
            <div className='lg:flex justify-evenly items-center  mt-28 bg-gray-100 '>
                <div>
                    <img className='h-[550px] mx-auto'  src={big} alt="" />
                </div>
                <div className='lg:w-[340px] bg-white '>
                    <h2 className='text-3xl font-bold '>Easily add your design to a wide range of products</h2>
                    <p className='text-gray-400 mt-8 mb-8'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>

                    <h4 className='text-green-600 text-xl flex items-center gap-3'>All Products <FaArrowRight /></h4>
                </div>
            </div>
            <div className=' -mt-80 ml-96 pl-24 lg:block '>
                <img src={small} alt="" />
            </div>
        </div>
        
    );
};

export default AllProducts;