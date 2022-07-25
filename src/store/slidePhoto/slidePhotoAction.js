// import { faker } from '@faker-js/faker';
// import shortid from 'shortid';
import axiosInstance from '../../utilities/axiosInstance';
import { SLIDE_PHOTOS } from './data';
import { add, fetchData, remove, updateStatus } from './slidePhotoSlice';

export const fetchAllSlidePhotosAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    dispatch(fetchData(SLIDE_PHOTOS));
  } catch (error) {
    console.log(error.message);
  }
};

export const addSlidePhotoAction =
  (data = {}, callback) =>
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

export const removeSlidePhotoAction = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
    dispatch(remove({ id }));
  } catch (error) {
    console.log(error.message);
  }
};
export const updateSlidePhotoStatusAction =
  ({ id, value }) =>
  async (dispatch) => {
    try {
      const res = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );
      dispatch(updateStatus({ id, value }));
    } catch (error) {
      console.log(error.message);
    }
  };
