import React from 'react';

const Header = () => {
    return (
        <header className='flex bg-emerald-500 p-5 w-full text-3xl justify-between'>
            <h1>Cookie Stand Admin</h1>
            <button className='text-base bg-gray-300 px-4 rounded-lg'>Overview</button>
        </header>
    )
}

export default Header;
