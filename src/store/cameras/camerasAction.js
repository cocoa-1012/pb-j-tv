import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import axiosInstance from '../../utilities/axiosInstance';
import {
  add,
  changeLayout,
  fetchData,
  remove,
  updateSlide,
} from './camerasSlice';

import configData from '../../config';
export const fetchAllCamerasAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      configData.SERVER_URL+'cameras',{headers:{
        'userid': localStorage.getItem('accountSelected'),
        'Authorization': 'Bearer'+localStorage.getItem('token')
      }}
    );

    dispatch(fetchData(res.data));
  } catch (error) {
    console.log(error.message);
  }
};
const CAMERAS_DATA = {
  id: shortid(),
  name: faker.company.bs(),
  ip: faker.internet.ip(),
  enable: Math.ceil(Math.random() * 2) === 1,
  blank: Math.ceil(Math.random() * 2) === 1,
};

export const addCamerasAction =
  (data = CAMERAS_DATA, callback) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );

      dispatch(add(data));
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
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};
export const changeCamerasLayoutAction =
  ({ displayLoayoutId }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );
      dispatch(changeLayout({ displayLoayoutId }));
    } catch (error) {
      console.log(error.message);
    }
  };
export const slideShowCamerasLayoutAction = (value) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    dispatch(updateSlide(value));
  } catch (error) {
    console.log(error.message);
  }
};
