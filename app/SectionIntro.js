import React from 'react';

export default function SectionIntro(props) {
  const { children, dark } = props;
  return (
    <div className='w-full flex items-center gap-2.5 pt-10 pr-5 pb-2.5 pl-5'>
      <div className={(dark) ?
        'h-0 flex-1 bg-white':
        'h-0 flex-1 bg-gray-900'}
      >
      </div>
      <h1 className={(dark) ? 
        'font-extrabold text-4xl sm:text-6xl [-webkit-text-stroke:_1.5px_white]':
        'font-extrabold text-4xl sm:text-6xl [-webkit-text-stroke:_1.5px_#0f172a]'}>{children}</h1>
      <div className={(dark) ?
        'h-0 flex-1 bg-white':
        'h-0 flex-1 bg-gray-900'}
      >
      </div>
    </div>
  )
}
