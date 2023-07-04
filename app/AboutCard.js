import React from 'react';

export default function AboutCard(props) {
  const { children, heading } = props;
  
  return (
    <div>
      AboutCard
      <p>
        {heading && 
          <h3>heading</h3>
        }
        Content stuff inside
      </p>
    </div>
  )
}
