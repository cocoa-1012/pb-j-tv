import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accounts from './page/Accounts/Account';
import BackDisplay from './page/BackDispaly/BackDisplay';
import Dashboard from './page/Dashboard/Dashboard';
import DisplayCameras from './page/DisplayCameras/DisplayCameras';
import LobbyDisplay from './page/LobbyDispaly/LobbyDisplay';
import LoginPage from './page/Login/Login';
import Messages from './page/Messages/Messages';
import PhotoSlide from './page/PhotoSlide/PhotoSlide';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/display-cameras' element={<DisplayCameras />} />
          <Route path='/message' element={<Messages />} />
          <Route path='/photo-slide' element={<PhotoSlide />} />

          <Route path='/lobby-display' element={<LobbyDisplay />} />
          <Route path='/back-display' element={<BackDisplay />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
