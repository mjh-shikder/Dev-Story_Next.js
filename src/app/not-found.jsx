import Link from 'next/link';
import React from 'react';



const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col gap-5 justify-center items-center  '>
            <h2 className=' text-pink-700'>Page Not Found (Custom page)</h2>
            <Link href={'/'}>Go to Home</Link>
        </div>
    );
};

export default NotFound;