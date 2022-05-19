import React from 'react';
import { resumeContext } from '../../resumeContext';
import Biography from '../Biography';

export default function Thumbnail() {
  const resumeData = React.useContext(resumeContext);

  return (
    <div>
      <div className='thumbnail'>
        <img src={resumeData.thumbnail} alt={resumeData.name} />
      </div>
      <Biography />
      <div className='my-3'>
        <p className='text-medium text-small'>{resumeData.biography}</p>
      </div>
    </div>
  );
}
