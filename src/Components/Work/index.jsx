import React from 'react';
import { resumeContext } from '../../resumeContext';
import { uuid } from '../../utils/uuid';

export default function Work() {
  const resumeData = React.useContext(resumeContext);
  return (
    <div className='my-5'>
      <h3 className='text-large'>Work</h3>
      {resumeData.work.map((work) => {
        return (
          <div className='my-2' key={uuid()}>
            <div className='my-3'>
              <p className='text-small my-1'>{work.year}</p>
              <h3 className='text-medium'>{work.company}</h3>
              <h6 className='text-small'>{work.role}</h6>
              <ul>
                {work.summary.map((summary) => {
                  return (
                    <li className='text-medium my-1' key={uuid()}>
                      - {summary}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
