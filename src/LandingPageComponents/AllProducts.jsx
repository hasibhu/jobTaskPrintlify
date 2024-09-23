import small from '../assets/allProdSmall.png'
import big from '../assets/allProdBig.png'

const AllProducts = () => {
    return (
        <div>
            <div className='lg:flex justify-evenly items-center  mt-28 '>
                <div>
                    <img className='h-[550px] mx-auto'  src={big} alt="" />
                </div>
                <div className='lg:w-[340px]'>
                    <h2>Easily add your design to a wide range of products</h2>
                    <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>

                    <h4>All Products</h4>
                </div>
            </div>
            <div className=' -mt-80 ml-96 pl-24 lg:block '>
                <img src={small} alt="" />
            </div>
        </div>
        
    );
};

export default AllProducts;