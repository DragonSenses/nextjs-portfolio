import React from 'react';
import SectionIntro from './SectionIntro';
import AboutCard from './AboutCard';

export default function About() {
  return (
    <section id='about-me' className='sm:text-6xl'>
      <div className='w-11/12 max-w-full flex items-center flex-col'>

        <SectionIntro>ABOUT ME</SectionIntro>

        <div className='p-5 gap-5 grid text-center grid-cols-1 sm:grid-cols-3'>
          <AboutCard>I am strongly committed to the philosophy of <strong>life-long learning</strong> & stoicism.</AboutCard>
          <AboutCard>I am a <strong>Full Stack Developer</strong> with an ardent passion for all things
            Web Development, JavaScript and React.</AboutCard>
          <AboutCard>I take pride in writing clean, maintainable and reusable code.</AboutCard>
          <AboutCard heading='Self-Motivated'>Passionate about technologies that have real impact.
              Whether its the latest tech developments, tools or frameworks.</AboutCard>
          <AboutCard heading='Accountable'>I can work in unstructured environments and take ownership even in ambiguous situations.</AboutCard>
          <AboutCard heading='Communicator'>I value effective communication, whether 
              its asking the right questions, feedback, or understanding concepts.</AboutCard>
          <AboutCard heading='Quick Learner'></AboutCard>
          <AboutCard heading='Empathetic'>I'll put in the extra effort to seek to understand others.
              Whether its a teammate or the end-user. </AboutCard>
          <AboutCard heading='Hobbies'>Working out, reading/writing, and drinking green tea.</AboutCard>
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
