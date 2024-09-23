

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow h-screen">
                        
                        <li><a>Catalog</a></li>

                    <li className="relative group">
                        <a className="cursor-pointer flex items-center">
                        How It Works
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                        </a>
                        <ul className="hidden group-hover:block pl-4 mt-2">
                        <li><a href="#">How Printify Works</a></li>
                        <li><a href="#">Print On Demand</a></li>
                        <li><a href="#">Printify Quality Promise</a></li>
                        <li><a href="#">What to sell?</a></li>
                        </ul>
                    </li>

                    <li><a>Price</a></li>
                    <li><a>Blog</a></li>

                    <li className="relative group">
                        <a className="cursor-pointer flex items-center">
                        Services
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                        </a>
                        <ul className="hidden group-hover:block pl-4 mt-2">
                        <li><a href="#">Printify Studio</a></li>
                        <li><a href="#">Printify Express Delivery</a></li>
                        <li><a href="#">Transfer Products</a></li>
                        <li><a href="#">Order In Bulk</a></li>
                        <li><a href="#">Experts Program</a></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <a className="cursor-pointer flex items-center">
                        Use-cases
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                        </a>
                        <ul className="hidden group-hover:block pl-4 mt-2">
                        <li><a href="#">Merch for Fans</a></li>
                        <li><a href="#">Merch for eCommerce</a></li>
                        <li><a href="#">Merch for Enterprises</a></li>
                        <li><a href="#">Grow Your Store</a></li>
                        </ul>
                    </li>

                    <li className="relative group">
                        <a className="cursor-pointer flex items-center">
                        Need help?
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                        </a>
                        <ul className="hidden group-hover:block pl-4 mt-2">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">My Requests</a></li>
                        </ul>
                    </li>

                </ul>
                    
                   
                </div>
                <a className="btn btn-ghost text-3xl text-green-600 font-bold">Printify</a>
            </div>
            



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li><a>Catalog</a></li>
                    <li className="relative group">
                        
                        <a className="cursor-pointer flex items-center">
                            How It Works
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        <ul className="absolute left-0  hidden mt-2 top-6 w-44 bg-white shadow-lg group-hover:block">
                            <li className=" hover:bg-gray-100"><a href="#">How Printify Works</a></li>
                            <li className="p-2 hover:bg-gray-100"><a href="#">Print On Demand</a></li>
                            <li className="p-2 hover:bg-gray-100"><a href="#">Printify Quality Promise</a></li>
                            <li className="p-2 hover:bg-gray-100"><a href="#">What to sell?</a></li>
                        </ul>
                        </li>

                        <li><a>Price</a></li>
                        <li><a>Blog</a></li>

                    <li className="relative group">
                    <a className="cursor-pointer flex items-center">
                        Services
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <ul className="absolute left-0 hidden mt-2 top-6 w-44 bg-white shadow-lg group-hover:block">
                        <li className="p-2 hover:bg-gray-100"><a href="#">Printify Studio</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Printify Express Delivery</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Transfer Products</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Order In Bulk</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Experts Program</a></li>
                    </ul>
                    </li>

                    

                    <li className="relative group">
                    <a className="cursor-pointer flex items-center">
                        Use-cases
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <ul className="absolute left-0 hidden mt-2 top-6 w-44 bg-white shadow-lg group-hover:block">
                        <li className="p-2 hover:bg-gray-100"><a href="#">Merch for Fans</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Merch for eCommerce</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Merch for Enterprises</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Grow Your Store</a></li>
                    </ul>
                    </li>

                    <li className="relative group">
                    <a className="cursor-pointer flex items-center">
                        Need help?
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <ul className="absolute left-0 hidden mt-2 top-6 w-44 bg-white shadow-lg group-hover:block">
                        <li className="p-2 hover:bg-gray-100"><a href="#">Help Center</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">Contacts</a></li>
                        <li className="p-2 hover:bg-gray-100"><a href="#">My Requests</a></li>
                    </ul>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn w-24  mr-6 border border-gray-800">Log in</a>
                <a className="btn bg-green-600 text-white">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;