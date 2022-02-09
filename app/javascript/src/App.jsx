import React from 'react';
import { ProvideAuth } from './hooks/useAuth';
import Routes from './Routes'
import Sidebar from './components/Sidebar';


import './styles/index.scss'

const App = () => {  
  return <div className="App">
    <ProvideAuth>
      <Sidebar />
      <div className="main-container">
        <Routes />
      </div>
    </ProvideAuth>
  </div>
};

export default App;
