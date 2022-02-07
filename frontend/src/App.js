import React, { useEffect } from 'react';

//! Components
import Router from './routes/Router';

//! Main Component
const App = () => {
  useEffect(() => {
    document.title = 'Montana Resort';
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
