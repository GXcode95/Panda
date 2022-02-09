import React from 'react';
import { ProvideAuth } from './hooks/useAuth';
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar';
import Home from './screens/Home'
import Login from './screens/Login'
import NotFound from './screens/NotFound'

import './styles/index.scss'

const App = () => {  
  return <div className="App">
    <ProvideAuth>
      <Sidebar />
      <main className="main-container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/*" exact element={<NotFound />} />
        </Routes>
      </main>
    </ProvideAuth>
  </div>
};

export default App;
