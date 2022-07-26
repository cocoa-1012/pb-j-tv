import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DisplayCamerasContent from '../../components/DisplayCameras/DisplayCamerasContent';
import Header from '../../components/Header/Header';
import { setLayoutDataFromLocalStorage } from '../../store/cameras/camerasAction';

const DisplayCameras = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLayoutDataFromLocalStorage());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <DisplayCamerasContent />
    </div>
  );
};

export default DisplayCameras;
