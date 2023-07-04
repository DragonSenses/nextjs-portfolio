import React from 'react';
import SectionIntro from './SectionIntro';

export default function About() {
  return (
    <section id='about-me' className=''>
      <div className=''>
        <SectionIntro>ABOUT ME</SectionIntro>
        <div className=''>This will contain content
        
        </div>

        <div className=''>
          <i className="fa-solid fa-dragon"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-book-open-reader"></i>
          <i className="fa-solid fa-mug-hot"></i>
        </div>
      </div>
    </section>
  )
}
