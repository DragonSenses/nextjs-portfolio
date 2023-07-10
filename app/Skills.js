import React from 'react';
import SectionIntro from './SectionIntro';

export default function Skills() {
  const abilities = {
    JavaScript: ['React', 'Node.js', 'Express.js'],
    Java: ['Java 8', ,'JUnit5', 'Spring', 'Apache Maven'],
    Web: ['Git','TailwindCSS', 'SASS', 'Firebase', 'Netlify', 'Docker','Kubernetes'],
    Database: ['MongoDB', 'SQL', 'NoSQL',],
    Design: ['Adobe InDesign','PhotoShop', 'Pixlr', 'Figma'],
  }

  return (
    <section id='skills' className='sm:text-6xl'>
      <SectionIntro dark={true}>SKILLS</SectionIntro>

      <div className='p-5 gap-5 sm:gap-10 grid text-center grid-cols-1 sm:grid-cols-3'>
        <div className=''>
          <h3>Front-End</h3>
          React
          NextJS
          HTML5
          CSS3
          JavaScript
          TailwindCSS
        </div>
        <div className=''>
          <h3 className="">Back-End</h3>
          NodeJS
          Express
          MongoDB
        </div>
        <div className="">
          <h3 className="text-6xl">Web</h3>
          Git
          Adobe PhotoShop
          Adobe InDesign
          
        </div>
      </div>
    </section>
  )
}
