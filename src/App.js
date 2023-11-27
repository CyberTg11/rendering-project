import React from 'react';
import CustomButton from './Components/CustomButton';
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <CustomButton text="Click" />
      <CustomButton text="Warning" warnMessage=" Warning: You were hacked!" />
      <CustomButton text="Hover" hint="Pop-up message" />
    </div>
  );
};

export default App;