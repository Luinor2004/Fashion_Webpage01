// App.js
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import AuthSection from './AuthSection';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginWindow = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div>
      <HeroSection isLoginOpen={isLoginOpen} />
      <AuthSection toggleLoginWindow={toggleLoginWindow} />
    </div>
  );
};

export default App;
