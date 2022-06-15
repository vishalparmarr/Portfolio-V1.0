import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold'>Yu Shi</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Skills</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Blogs</li>
        <li className='p-4'>Resume</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar