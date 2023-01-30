import axios from 'axios';
import { endPoint } from '../../utils/endPoint';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSchAllAdmin: async function () {
    return axios.request({
      method: 'get',
      url: `${endPoint}private/admin-sch-getall`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getSchById: async function (payload) {
    return axios.request({
      method: 'get',
      url: `${endPoint}private/sch/${payload}`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
  addSchAdmin: async function (payload) {
    return axios.request({
      method: 'post',
      url: `${endPoint}private/sch-add`,
      data: payload,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

};