// import { faker } from '@faker-js/faker';
// import shortid from 'shortid';
import configData from '../../config';
import axiosInstance from '../../utilities/axiosInstance';
import { add, fetchData, remove, updateStatus } from './slidePhotoSlice';
export const fetchAllSlidePhotosAction = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get(configData.SERVER_URL + 'slides', {
      headers: {
        userid: localStorage.getItem('accountSelected'),
        Authorization: 'Bearer' + localStorage.getItem('token'),
      },
    });

    dispatch(fetchData(res.data));
    // const res = await axiosInstance.get(
    //   `https://jsonplaceholder.typicode.com/todos`
    // );

    // dispatch(fetchData(SLIDE_PHOTOS));
  } catch (error) {
    console.log(error.message);
  }
};

export const addSlidePhotoAction = (data, callback) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.image.name);
    formData.append('file', data.image, data.image.name);
    formData.append('file_name', data.image.name + '_' + new Date().getTime());
    formData.append('file_title', data.image.name + '_' + new Date().getTime());
    formData.append('status', 0);
    formData.append('sliderTime', data.sliderTime);
    formData.append('userId', localStorage.getItem('accountSelected'));

    const res = await axiosInstance.post(`/slides`, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    const { data: photoData } = await axiosInstance.get(
      `/slides/${res.data.id}`
    );

    dispatch(add(photoData));
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
    await axiosInstance.delete(`/slides/${id}`);
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
