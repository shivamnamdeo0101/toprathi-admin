import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setUserDetails,getAuthSuccess } from '../../store/UserSlice';
import { endPoint } from '../../utils/endPoint';

function PutUserData(payload){
    return axios.request({
        method: 'post',
        url: `${endPoint}auth/login`,
        data: payload,
    });
}

function* workerGetUserFetch(action){
    const response = yield call(PutUserData,action.payload);
    yield put(setUserDetails(response.data.data))
    yield put(getAuthSuccess())
}

function* userSaga(){
    yield takeEvery("user/getAuthFetch",workerGetUserFetch)
}

export default userSaga;