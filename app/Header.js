import React from 'react';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white min-h-screen flex sm:flex-col 
      justify-center items-center select-none gap-3.5'>
      <h1 className='text-6xl text-center font-extrabold'>Header</h1>
      <nav className='flex flex-col sm:flex-row justify-center items-center
        text-6xl sm:text-7xl gap-12 '>
        <a href='#about-me' className=''>
          <i className={`fa-solid fa-dragon `}></i>
        </a>

        <a href='#skills' className=''>
          <i className={`fa-solid fa-list-check `}></i>
        </a>

        <a href='#projects' className=''>
          <i className={`fa-solid fa-diagram-project `}></i>
        </a>

        <a href='#experience' className=''>
          <i className={`fa-solid fa-book-open `}></i>
        </a>

      </nav>
    </header>
  )
}
