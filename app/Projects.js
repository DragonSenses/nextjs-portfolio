import React from 'react';
import SectionIntro from './SectionIntro';

export default function Projects() {
  return (
    <section id='projects' className='sm:text-6xl'>
      <div className='w-11/12 max-w-full flex items-center flex-col'>
        <SectionIntro>PROJECTS</SectionIntro>
        <div className='grid gap-1.5 [grid-template-columns:_repeat(1,_minmax(0,_1fr))]
          sm:[grid-template-columns:_repeat(2,_minmax(0,_1fr))]
          lg:[grid-template-columns:_repeat(3,_minmax(0,_1fr))] lg:gap-2.5'
        >

        </div>
      </div>
    </section>
  )
}
