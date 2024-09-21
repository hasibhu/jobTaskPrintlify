import profit from '../assets/higher-profits.png'
import scaling from '../assets/robust-scaling.png'
import selection from '../assets/best-selection.png'

const Services = () => {
    return (
        <div className='flex justify-evenly items-center px-auto mt-24'>
            <div className='1/3'>
                <img className='rounded-full w-36 h-36' src={profit} alt="" />
                <h2 className='text-2xl font-bold mt-6'>Higher Profits</h2>
                <p className='w-[345px]'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
            </div>
           
            <div className='1/3' >
                <img className='rounded-full w-36 h-36' src={scaling} alt="" />
                <h2 className='text-2xl font-bold mt-6'>Higher Profits</h2>
                <p className='w-[345px]'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
            </div> 
           
            <div className='1/3'>
                <img className='rounded-full w-36 h-36' src={selection} alt="" />
                <h2 className='text-2xl font-bold mt-6'>Higher Profits</h2>
                <p className='w-[345px]'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
            </div> 
        </div>

    );
};

export default Services;