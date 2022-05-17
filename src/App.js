import { useState } from 'react';
import './App.css';
import Resume from './Pages/Resume';
import resumeapi from './resume-data.json';
import { resumeContext } from './resumeContext';

function App() {
  const [resumeData] = useState(resumeapi);

  return (
    <resumeContext.Provider value={resumeData}>
      <Resume />
    </resumeContext.Provider>
  );
}

export default App;
