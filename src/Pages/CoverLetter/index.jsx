import React from 'react';
import { resumeContext } from '../../resumeContext';
import './style.css';
import { gsap } from 'gsap';

export default function CoverLetter(props) {
  const resumeData = React.useContext(resumeContext);

  const column1 = React.useRef();
  const column2 = React.useRef();

  React.useEffect(() => {
    gsap.from([column1.current, column2.current], {
      duration: 1,
      y: -100,
      stagger: 0.5,
      opacity: 0,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div>
      <div ref={column1} className='cover-letter-header'>
        <div className='container'>
          <div className='cover-letter-inner'>
            <h2 className='text-large'>{resumeData.name}</h2>
            <p className='text-medium'>{resumeData.profession}</p>
          </div>
        </div>
      </div>
      <div ref={column2} className='container'>
        <div className='my-5'>
          <p className='text-medium' style={{ whiteSpace: 'pre-line' }}>
            {resumeData.cover_letter}
          </p>

          <div className='my-5'>
            <div className='attached-file' onClick={() => props.toggleView()}>
              <img
                src='https://img.icons8.com/material-outlined/24/000000/pdf.png'
                alt=''
              />
              <p className='text-small'>Benjamin Bala - Resume.pdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
