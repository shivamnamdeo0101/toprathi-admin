import axios from 'axios';
import { endPoint } from '../../utils/endPoint';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSchAllAdmin: async function (payload) {
    return axios.request({
      method: 'post',
      url: `${endPoint}private/admin-sch-getall`,
      data: payload,
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