import React from 'react';
import Image from 'next/image';

export default function ImgOverlay(props) {
  const { imgSrc, description, title, githubLink, projectLink, children } = props;
  return (
    <div className='max-w-full object-contain relative duration-300 hover:opacity-80'>
      <Image 
        className='max-w-full'
        src={imgSrc}
        width={1920}
        height={1080}
        alt={description}
      />
      <div className="absolute inset-0 opacity-0 hover:opacity-80 duration-300 bg-gray-900 
      text-white flex flex-col items-center justify-around p-5">
        <h2 className="font-medium sm:font-semibold underline text-lg sm:text-2xl">{title.toUpperCase()}</h2>
        <p className="text-base sm:text-lg">{children}</p>
        <div className="flex w-full items-center justify-around">
          <a
            className='cursor-pointer py-1 px-8 text-inherit bg-gray-900 sm:flex
            no-underline duration-300 hover:text-gray-900 hover:bg-white'
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fa-brands fa-github text-3xl`}></i>
          </a>
          <a
            className='cursor-pointer py-1 px-8 text-inherit bg-gray-900 sm:text-xl
            no-underline duration-300 hover:text-gray-900 hover:bg-white'
            href={projectLink}
            target="_blank"
            rel="noreferrer"
          >
            Link to Project &#8594;
          </a>
        </div>
      </div>
    </div>
  )
}
