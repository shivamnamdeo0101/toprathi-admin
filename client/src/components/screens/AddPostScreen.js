import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { useDispatch,useSelector } from "react-redux";
import { flushAuthData } from "../../store/UserSlice";
import LeftSideBar from "../dashboard/LeftSideBar";
import HeaderComp from "../dashboard/HeaderComp";
import DashboardComp from "../dashboard/DashboardComp";
import AddPostComp from "../dashboard/AddPostComp";


const AddPostScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state=>state.userAuth.user);
  const logout = async (e)=>{
    e.preventDefault();
    dispatch(flushAuthData());
    history.push("/login");
  }
  
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div className="dashboard_page">
        <HeaderComp />
        <div className="dashboard_flex_row">
            <LeftSideBar />
            
            <div className='dashboard_comp'>
                <AddPostComp />
            </div>
        </div>
    </div>
  );
};

export default AddPostScreen;
