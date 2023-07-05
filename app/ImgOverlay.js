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
      <div className="overlay">
        <h2 className="header"></h2>
        <p className="para"></p>
        <div className="links">
          <Link></Link>
          <Link></Link>
        </div>
      </div>
    </div>
  )
}
