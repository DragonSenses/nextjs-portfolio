import React from 'react';

export default function Header() {
  return (
    <header className=''>
      <h1 className=''>Header Name</h1>
      <nav className=''>
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
