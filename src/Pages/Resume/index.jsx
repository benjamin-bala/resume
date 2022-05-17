import React from 'react';
import Skills from '../../Components/Skills';
import Thumbnail from '../../Components/Thumbnail';
import Work from '../../Components/Work';

export default function Resume() {
  return (
    <div className='container grid-cols-3'>
      <div>
        <h2 className='welcome-text'>Hello,</h2>
      </div>
      <div>
        <Thumbnail />
        <Skills />
        <Work />
      </div>
      <div>
        <h2>Tet</h2>
      </div>
    </div>
  );
}
