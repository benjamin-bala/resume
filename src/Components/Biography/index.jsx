import React from 'react';
import { resumeContext } from '../../resumeContext';

export default function Biography() {
  const resumeData = React.useContext(resumeContext);
  return (
    <div>
      <div className='my-2'>
        <h2 className='text-large'>{resumeData.name}</h2>
        <div className='my-1'>
          <div>
            <a
              href={`mailto:${resumeData.socials.email}`}
              className='text-medium no-decoration'
            >
              {resumeData.socials.email}
            </a>
          </div>
          <div>
            <a
              href={`tel:${resumeData.socials.phone}`}
              className='no-decoration text-medium'
            >
              {resumeData.socials.phone}
            </a>
          </div>
          <div>
            <a
              className='text-medium'
              referrerPolicy={'no-referrer'}
              href={resumeData.socials.github}
            >
              {resumeData.socials.github.split('https://').pop()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
