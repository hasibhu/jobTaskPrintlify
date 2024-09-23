import React from 'react';

const Footer = () => {
    return (
        <div className='text-center bg-gray-300 mb-2 pb-3'>
            <div className='lg:flex justify-center p-4 gap-5'>
                <p> Intellectual Property Policy</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Security</p>
            </div>
            <div>
                <p>&copy; 2024 Printify, Inc. All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;