import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImgOverlay(props) {
  const { imgSrc, description, title, githubLink, projectLink, children } = props;
  return (
    <div className='max-w-full object-contain relative duration-300'>
      <Image 
        className='max-w-full'
        src={imgSrc}
        alt={description}
      />
      <div className="absolute opacity-0 duration-300 bg-gray-900 text-white
      flex flex-col items-center justify-around p-5 inset-0">
        <h2 className="font-medium underline">{title.toUpperCase()}</h2>
        <p className="">{children}</p>
        <div className="flex w-full items-center justify-around">
          <Link></Link>
          <Link></Link>
        </div>
      </div>
    </div>
  )
}
