import React from 'react';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white min-h-screen flex sm:flex-col 
      justify-center items-center select-none gap-3.5'>
      <h1 className='text-6xl text-center font-extrabold sm:text-7xl sm:[text-align:unset]
        sm:[writing-mode:unset] sm:[text-orientation:unset] sm:[letter-spacing:4px]
        [writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-0.25em]
        [text-shadow:_0.03em_0.03em_0_rgb(0_255_213),_0.06em_0.06em_0_rgb(154_192_18),_0.09em_0.09em_0_rgb(226_143_87),_0.11em_0.11em_0_rgb(161_24_127)]
        '>Header</h1>
      <nav className='flex flex-col sm:flex-row justify-center items-center
        text-6xl sm:text-7xl gap-12 '>
        <a href='#about-me' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-dragon nav-icons`}></i>
        </a>

        <a href='#skills' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-list-check nav-icons`}></i>
        </a>

        <a href='#projects' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-diagram-project nav-icons`}></i>
        </a>

        <a href='#experience' className='[text-decoration:inherit] [outline:none] [color:unset]'>
          <i className={`fa-solid fa-book-open nav-icons`}></i>
        </a>

      </nav>
    </header>
  )
}
