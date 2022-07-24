import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accounts from './page/Accounts/Account';
import Dashboard from './page/Dashboard/Dashboard';
import DisplayCameras from './page/DisplayCameras/DisplayCameras';
import LoginPage from './page/Login/Login';
import Messages from './page/Messages/Messages';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/display-cameras' element={<DisplayCameras />} />
          <Route path='/message' element={<Messages />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
