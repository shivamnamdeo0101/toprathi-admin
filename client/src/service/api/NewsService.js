import axios from 'axios';
import { endPoint } from '../../utils/endPoint';
// eslint-disable-next-line import/no-anonymous-default-export
export default {

  newsGet: async function (page, perPage) {
    return axios.request({
      method: 'get',
      url: `${endPoint}private/news/${page}/${perPage}`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
  newsGetById: async function (newsId) {
    return axios.request({
      method: 'get',
      url: `${endPoint}private/news/${newsId}`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
  remNewsGetById: async function (newsId) {
    return axios.request({
      method: 'delete',
      url: `${endPoint}private/news/${newsId}`,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  newsAdd: async function (payload) {
    return axios.request({
      method: 'post',
      url: `${endPoint}private/news`,
      data: payload,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
  newsEdit: async function (payload, newsId) {
    return axios.request({
      method: 'put',
      url: `${endPoint}private/news/${newsId}`,
      data: payload,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  }

};