import React from 'react';

export default function Footer() {
  return (
    <footer className={(dark ? 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-gray-900 text-white" : 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-white text-gray-900"
    )}>
      <a href="https://github.com/DragonSenses" 
        className={(dark ? 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-white hover:text-gray-900" : 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-gray-900 hover:text-white"
        )} 
        target="_blank" rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://google.com/" 
        className={(dark ? 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-white hover:text-gray-900" : 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-gray-900 hover:text-white"
        )} 
        target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://google.com/" 
        className={(dark ? 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-white hover:text-gray-900" : 
          "cursor-pointer py-0 px-2 duration-300 no-underline text-inherit hover:scale-110 hover:bg-gray-900 hover:text-white"
        )} 
        target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-address-card"></i>
      </a>
    </footer>
  )
}
