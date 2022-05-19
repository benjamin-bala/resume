import React from 'react';
import Biography from '../../Components/Biography';
import Projects from '../../Components/Projects';
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
      </div>
      <div>
        <Work />
        <Projects />
      </div>
    </div>
  );
}
