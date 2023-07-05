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
          <ImgOverlay
            imgSrc={img1}
            description={"first project is an ecommerce site"}
            title={"PROJECT 1"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Next.js</strong> and <strong>Commerce.js</strong>
          </ImgOverlay>

          <ImgOverlay
            imgSrc={img2}
            description={"second project"}
            title={"PROJECT 2"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Stripe.js</strong> and <strong>Zustand</strong>
          </ImgOverlay>

          <ImgOverlay
            imgSrc={img3}
            description={"third project is an ecommerce site"}
            title={"PROJECT 3"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>MongoDB</strong> and <strong>Node.js</strong>
          </ImgOverlay>

          <div className='vanilla_projects'>

          </div>

        </div>
      </div>
    </section>
  )
}
