import { useState } from 'react';
import './App.css';
import CoverLetter from './Pages/CoverLetter';
import Resume from './Pages/Resume';
import resumeapi from './resume-data.json';
import { resumeContext } from './resumeContext';

function App() {
  const [resumeData, setResumeData] = useState({
    ...resumeapi,
    view: 'resume',
  });

  const toggleView = () =>
    setResumeData({
      ...resumeData,
      view: resumeData.view === 'resume' ? 'coverletter' : 'resume',
    });

  return (
    <resumeContext.Provider value={resumeData}>
      {resumeData.view === 'resume' ? (
        <Resume toggleView={toggleView} />
      ) : (
        <CoverLetter toggleView={toggleView} />
      )}
    </resumeContext.Provider>
  );
}

export default App;
