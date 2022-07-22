import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DashboardContent from '../../components/Dashboard/DashboardContent';
import Header from '../../components/Header/Header';
import { fetchAllMessageAction } from '../../store/messages/messageAction';
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMessageAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
