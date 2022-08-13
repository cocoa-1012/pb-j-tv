import axios from 'axios';
import configData from "../../config.json";


import { login, logout } from './authSlice';

/**
 *
 * @param {*} data  {username: string , password: string , remember: boolean}
 * @param {*} callback (isOk: boolean , value: any)
 * @returns
 */
export const authLoginAction = (data, callback) => async (dispatch) => {
  try {

    var dataSend = JSON.stringify({
      "strategy": "jwt",
      "username": data.username,
      "password": data.password
    });
  
    var config = {
      method: 'post',
      url: configData.SERVER_URL+'authentication',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : dataSend
    };
    
    
    const res = await axios(config);
    localStorage.setItem("token",res.data.sign);
    // console.log(res);
    dispatch(login({ user: { id: res.data.user.id } }));
    callback(true);
  } catch (error) {
    console.log(error);

    callback(
      false,
      {message:'Invalid username or password'}
    );

    console.log(error.message);
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(logout());
  } catch (error) {
    console.log(error.message);
  }
};
