import React from 'react';
import ListEntry from './ListEntry';

export default function Experience() {
  return (
    <section id="experience">
      <div className='max-w-full w-11/12 flex items-center flex-col'>
        <SectionIntro dark={true}>Experience</SectionIntro>

        <div className="flex flex-col w-full gap-8 py-0 px-5 sm:py-5 sm:px-12">
          <ListEntry title={"Workplace"} date={"2023 - Present"}>
            <li>List Item</li>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"School"} date={"2017 - 2023"}>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"Tutor"} date={"2016 - Present"}>
            <li>List Item</li>
          </ListEntry>
        </div>
      </div>
    </section>
  )
}
