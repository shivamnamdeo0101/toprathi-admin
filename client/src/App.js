import { BrowserRouter as Router, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import AddPostScreen from "./components/screens/AddPostScreen";
import AddSliderScreen from "./components/screens/AddSliderScreen";
import EditPostScreen from "./components/screens/EditPostScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import EmailVerifyScreen from "./components/screens/EmailVerifyScreen";
import AddSchScreen from "./components/screens/AddSchScreen";
import SchFilterService from "./service/api/SchFilterService";
import { useEffect } from 'react';
import { setAuthority, setCaste, setEducationType, setFromWhere, setRegion } from "./store/SchFilterSlice";


const App = () => {

  const dispatch = useDispatch()

  const { getFilter } = SchFilterService;

  const user = useSelector(state => state.userAuth.user)
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }


    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (config) {
    // Do something before request is sent
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  const modifyJson = (jsonArr) => {
    return jsonArr.map(
      obj => {
        return {
          "_id": obj._id,
          "label": obj.name,
          "value": obj.name,
          "indexId": obj.indexId
        }
      }
    );

  }

  const modifyRegion = (jsonArr) => {
    return jsonArr.map(
      obj => {
        return {
          "_id": obj._id,
          "label": obj.value,
          "value": obj.name,
        }
      }
    );

  }

  useEffect(() => {
    const fetchData = async () => {
      await getFilter("fromwhere").then((res) => {
        dispatch(setFromWhere(modifyJson(res?.data)))
      })
      await getFilter("educationtype").then((res) => {
        dispatch(setEducationType(modifyJson(res?.data)))
      })
      await getFilter("authority").then((res) => {
        dispatch(setAuthority(modifyJson(res?.data)))
      })
      await getFilter("caste").then((res) => {
        dispatch(setCaste(modifyJson(res?.data)))
      })
      await getFilter("region").then((res) => {
        dispatch(setRegion(modifyRegion(res?.data)))
      })
    }

    fetchData()
  }, [])




  return (
    <Router>
      <div className="app">
        <PrivateRoute exact path="/add-post" component={AddPostScreen} />
        <PrivateRoute exact path="/add-schlorship" component={AddSchScreen} />
        <PrivateRoute exact path="/edit-post/:newsId" component={EditPostScreen} />
        <PrivateRoute exact path="/add-slide" component={AddSliderScreen} />

        <PrivateRoute exact path="/" component={PrivateScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route
          exact
          path="/forgotpassword"
          component={ForgotPasswordScreen}
        />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={ResetPasswordScreen}
        />
        <Route
          exact
          path="/email-verify/:emailToken"
          component={EmailVerifyScreen}
        />
      </div>

    </Router>
  );
};

export default App;
