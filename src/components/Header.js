import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })
  return (
    <header className={`${bg ? 'bg-gray-900 h-16' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
            <a href='#'>
                <h1 className='w-full text-3xl font-bold'>Yu Shi</h1>
            </a>
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className='lg:hidden'>
                <MobileNavbar />
            </div>
        </div>
    </header>
  )
}

export default Header