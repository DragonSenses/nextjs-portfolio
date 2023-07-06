import React from 'react';

export default function ListEntry(props) {
  const { title, date, children } = props;
  return (
    <div>
      <div className='header'>
        <h1 className='title'>{title}</h1>
        <h1 className='date'>{date}</h1>
      </div>
      <ul className='ul'>
        {children}
      </ul>
    </div>
  )
}
