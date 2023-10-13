import React, { useEffect, useState } from 'react';
import Desktop from './page/desktop';
import Mobile from './page/mobile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './fonts.css'; // Import the custom font
const getWindowDimensions = () => {
  const { innerWidth } = window;
  // console.log(innerWidth);
  return innerWidth;
}



function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          windowDimensions < 768 ? <Mobile /> : <Desktop />
        }
   
      </header>
    </div>
  );
}

export default App;
