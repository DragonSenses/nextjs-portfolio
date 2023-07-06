import React from 'react';

export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <div>
      <div className='flex flex-col text-xs items-center pb-2'>
        <h1 className='font-medium'>{title}</h1>
        <h1 className='text-xs font-normal'>{date}</h1>
      </div>
      <ul className='text-xs py-5 px-0'>
        {children}
      </ul>
    </div>
  )
}
