import axios from 'axios';
import { endPoint } from '../../utils/endPoint';
// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getFilter: async function (payload) {
        return axios.request({
            method: 'get',
            url: `${endPoint}private/filter-get/${payload}`,
        })
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return error.response;
            });
    },
    addFilter: async function (payload) {
        return axios.request({
            method: 'post',
            url: `${endPoint}private/filter-add`,
            data: payload
        })
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return error.response;
            });
    },


};