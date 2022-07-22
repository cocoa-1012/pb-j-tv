import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accounts from './page/Accounts/Account';
import Dashboard from './page/Dashboard/Dashboard';
import LoginPage from './page/Login/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
