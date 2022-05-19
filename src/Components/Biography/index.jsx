import React from 'react';
import './biography.css';
import { resumeContext } from '../../resumeContext';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

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
          <div className='social-icons'>
            <span>
              <a
                className='text-medium'
                referrerPolicy={'no-referrer'}
                href={resumeData.socials.github}
              >
                <img src={githubIcon} alt='Github' />
              </a>
            </span>
            <span>
              <a
                className='text-medium'
                referrerPolicy={'no-referrer'}
                href={resumeData.socials.linkedin}
              >
                <img src={linkedinIcon} alt='Linkedin' />
              </a>
            </span>
            <span>
              <a
                className='text-medium'
                referrerPolicy={'no-referrer'}
                href={resumeData.socials.twitter}
              >
                <img src={twitterIcon} alt='Twitter' />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
