import React from 'react';
import { resumeContext } from '../../resumeContext';
import { uuid } from '../../utils/uuid';

export default function Skills() {
  const [skilldata, setSkillData] = React.useState([]);

  const resumeData = React.useContext(resumeContext);

  React.useEffect(() => {
    setSkillData(resumeData.skills);
  }, [resumeData.skills]);

  return (
    <div className='my-3'>
      <h3 className='text-large'>Skills</h3>
      <div className='my-2'>
        {skilldata.map((skill) => {
          return (
            <div className='skill-item my-2' key={uuid()}>
              <div className='skill-name text-medium'>
                <span className='text-bold'>{skill.name}</span>

                <div className='progress-bar'>
                  <div
                    className='progress-bar-inner  load'
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
