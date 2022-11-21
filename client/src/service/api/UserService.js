import axios from 'axios';
import { endPoint } from '../../utils/endPoint';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userLoginApi: async function (payload) {
        return axios.request({
            method: 'post',
            url: `${endPoint}auth/login`,
            data: payload,
        })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error.response;
        });
    },

    userForgotPassword: async function (payload) {
      var data = JSON.stringify({
        "email": payload
      });
      return axios.request({
          method: 'post',
          url: `${endPoint}auth/forgotpassword`,
          data: data,
          headers: { 
            'Content-Type': 'application/json'
          },
      })
      .then((res) => {
        console.log(res)
        return res.data;

      })
      .catch((error) => {
        return error.response;
      });
  }

};