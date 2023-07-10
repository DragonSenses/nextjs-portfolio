import React from 'react';

export default function AboutCard(props) {
  const { children, heading } = props;
  
  return (
    <div className='font-medium text-sm leading-5 p-2 border border-sky-500
    sm:font-semibold sm:text-base sm:flex sm:flex-col'>
      { heading && 
        <h3 className='font-black sm:p-2'>{heading}</h3>
      }
      <p className='sm:m-auto sm:p-1'>
        {children}
      </p>
    </div>
  )
}