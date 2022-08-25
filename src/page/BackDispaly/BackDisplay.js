import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackDisplayContent from '../../components/BackDispaly/BackDisplay';
import { setLayoutDataFromLocalStorage } from '../../store/cameras/camerasAction';

const BackDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayoutDataFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <BackDisplayContent />
    </>
  );
};

export default BackDisplay;
