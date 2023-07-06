import React from 'react';

export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <div>
      <div className='flex flex-col text-xs items-center pb-2 
      sm:flex-row sm:justify-between sm:items-center sm:pb-5'>
        <h1 className='font-medium sm:text-2xl'>{title}</h1>
        <h1 className='text-xs font-normal sm:text-base'>{date}</h1>
      </div>
      <ul className='text-xs py-5 px-0 sm:text-base'>
        {children}
      </ul>
    </div>
  )
}
