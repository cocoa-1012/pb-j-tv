import axiosInstance from '../../utilities/axiosInstance';
import {
  add,
  changeLayout,
  fetchData,
  remove,
  update,
  updateSlide,
  updateStatus,
} from './camerasSlice';

import configData from '../../config';
export const fetchAllCamerasAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(configData.SERVER_URL + 'cameras', {
      headers: {
        userid: localStorage.getItem('accountSelected'),
        Authorization: 'Bearer' + localStorage.getItem('token'),
      },
    });

    dispatch(fetchData(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const addCamerasAction = (data, callback) => async (dispatch) => {
  const dataObject = {
    ...data,
    userId: localStorage.getItem('accountSelected'),
  };

  try {
    const {
      data: { id },
    } = await axiosInstance.post(`/cameras`, dataObject);
    const { data: camera } = await axiosInstance.get(`/cameras/${id}`);

    dispatch(add(camera));

    callback(true);
  } catch (error) {
    callback(
      false,
      error?.response?.status === 400 ? error?.response?.data : {}
    );
    console.log(error.message);
  }
};
export const updateCamerasAction = (data, callback) => async (dispatch) => {
  try {
    await axiosInstance.put(`/cameras/${data.id}`, data);
    const { data: camera } = await axiosInstance.get(`/cameras/${data.id}`);
    dispatch(update(camera));

    callback(true);
  } catch (error) {
    callback(
      false,
      error?.response?.status === 400 ? error?.response?.data : {}
    );
    console.log(error.message);
  }
};

export const removeCamerasAction = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/cameras/${id}`);
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};
export const changeCamerasLayoutAction =
  ({ rowCount, columnCount, orientation }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );

      const data = { row: rowCount, column: columnCount, orientation };

      localStorage.setItem('cameraData', JSON.stringify(data));

      dispatch(changeLayout(data));
    } catch (error) {
      console.log(error.message);
    }
  };
export const slideShowCamerasLayoutAction = (value) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );

    localStorage.setItem('isSideShow', value);

    dispatch(updateSlide(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const setLayoutDataFromLocalStorage = () => (dispatch, getState) => {
  try {
    const data = JSON.parse(localStorage.getItem('cameraData'));
    const isSideShow = JSON.parse(localStorage.getItem('isSideShow'));

    const slideShowPosition = localStorage.getItem('slideShowPosition');
    dispatch(changeLayout(data));
    dispatch(updateSlide(isSideShow));
    dispatch(changeLayout({ slideShowPosition }));
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCameraStatusAction =
  ({ id, type }, callback) =>
  async (dispatch, getState) => {
    try {
      const state = getState();
      const cameraData = state.cameras.data.find((c) => c.id === id);
      const dataObject = {
        ...cameraData,
      };

      if (type === 'status') {
        dataObject.status = !cameraData.status;
      }

      if (type === 'blankStatus') {
        dataObject.blankStatus = !cameraData.blankStatus;
      }

      const res = await axiosInstance.put(`/cameras/${id}`, dataObject);

      dispatch(updateStatus(res.data));

      callback(true);
    } catch (error) {
      callback(
        false,
        error?.response?.status === 400 ? error?.response?.data : {}
      );
      console.log(error.message);
    }
  };
