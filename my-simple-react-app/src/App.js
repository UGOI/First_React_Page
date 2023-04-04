import React from 'react';
import Header from './components/Header';
import Installation from './components/Installation';
import Uninstallation from './components/Uninstallation';
import Usage from './components/Usage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Installation />
      <Uninstallation />
      <Usage />
    </div>
  );
}

export default App;
