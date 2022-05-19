import React from 'react';
import Hobbies from '../../Components/Hobbies';
import Projects from '../../Components/Projects';
import Skills from '../../Components/Skills';
import Thumbnail from '../../Components/Thumbnail';
import Work from '../../Components/Work';
import { gsap } from 'gsap';

export default function Resume(props) {
  const column1 = React.useRef();
  const column2 = React.useRef();
  const column3 = React.useRef();

  React.useEffect(() => {
    gsap.from([column1.current, column2.current, column3.current], {
      duration: 1,
      y: -100,
      stagger: 0.5,
      opacity: 0,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className='container grid-cols-3'>
      <div ref={column1}>
        <h2 className='welcome-text'>Hello,</h2>
      </div>
      <div ref={column2}>
        <Thumbnail toggleView={props.toggleView} />
        <Skills />
        <Hobbies />
      </div>
      <div ref={column3}>
        <Work />
        <Projects />
      </div>
    </div>
  );
}
