import React from 'react'
import { ProvideAuth } from './hooks/useAuth'
import Routes from './Routes'
import Sidebar from './components/Sidebar'


import './styles/index.scss'
import { ProvideCourseData } from './hooks/useCourse'

const App = () => {  
  return <div className="App">
    <ProvideAuth>
      <ProvideCourseData>
        <Sidebar />
        <div className="main-container">
          <Routes />
        </div>
      </ProvideCourseData>
    </ProvideAuth>
  </div>
}

export default App
