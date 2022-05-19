import React from 'react';
import { resumeContext } from '../../resumeContext';
import Biography from '../Biography';

export default function Thumbnail(props) {
  const resumeData = React.useContext(resumeContext);

  return (
    <div>
      <div className='thumbnail'>
        <img src={resumeData.thumbnail} alt={resumeData.name} />
      </div>
      <Biography />
      <div className='my-3'>
        <p className='text-medium'>{resumeData.biography}</p>
      </div>
      <div className='my-3'>
        <div
          className='cursor-pointer'
          style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}
          onClick={() => props.toggleView()}
        >
          <img
            src='https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Letter-business-and-marketing-bearicons-detailed-outline-bearicons.png'
            alt='cover-letter'
            width={35}
            className='cursor-pointer'
          />
          <p className='cursor-pointer text-medium font-bold'>Cover letter</p>
        </div>
      </div>
    </div>
  );
}
