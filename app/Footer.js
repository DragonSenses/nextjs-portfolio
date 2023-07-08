import React from 'react';

export default function Footer() {
  return (
    <footer className={(dark ? 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-gray-900 text-white" : 
      "flex items-center justify-center gap-10 py-4 px-0 text-4xl sm:text-5xl bg-white text-gray-900"
    )}>
      Footer
    </footer>
  )
}
