import React from 'react';
import { resumeContext } from '../../resumeContext';
import { uuid } from '../../utils/uuid';

export default function Projects() {
  const resumeData = React.useContext(resumeContext);
  return (
    <div className='my-5'>
      <h3 className='text-large'>Projects</h3>
      {resumeData.projects.map((project) => {
        return (
          <div className='my-2' key={uuid()}>
            <div className='my-3'>
              <h3 className='text-medium'>{project.name}</h3>
              <h6 className='text-small'>
                <a href={project.link} className='text-small'>
                  {project.type === 'apk'
                    ? 'Apk file'
                    : project.link.split('https://').pop()}
                </a>
              </h6>
              <ul>
                {project.summary.map((summary) => {
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
