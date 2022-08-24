import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LobbyDisplayContent from '../../components/LobbyDispaly/LobbyDisplay';
import { setLayoutDataFromLocalStorage } from '../../store/cameras/camerasAction';

const LobbyDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayoutDataFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <LobbyDisplayContent />
    </>
  );
};

export default LobbyDisplay;
