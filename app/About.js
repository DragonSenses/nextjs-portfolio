import React from 'react';
import SectionIntro from './SectionIntro';

export default function About() {
  return (
    <section id='about-me' className='sm:text-6xl'>
      <div className='w-11/12 max-w-full flex items-center flex-col'>
        <SectionIntro>ABOUT ME</SectionIntro>
        <div className='p-5 gap-5 grid text-center
        [grid-template-columns:_repeat(1,_minMax(0,_1fr))]'>
          This will contain content
        </div>

        <div className='flex items-center text-3xl gap-8 pt-10 pb-0 sm:text-5xl sm:gap-16'>
          <i className="fa-solid fa-dragon"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-book-open-reader"></i>
          <i className="fa-solid fa-mug-hot"></i>
        </div>
      </div>
    </section>
  )
}
