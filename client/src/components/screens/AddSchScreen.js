import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { flushAuthData } from "../../store/UserSlice";
import LeftSideBar from "../dashboard/LeftSideBar";
import HeaderComp from "../dashboard/HeaderComp";
import DashboardComp from "../dashboard/DashboardComp";
import AddPostComp from "../dashboard/AddPostComp";
import AddSchComp from "../dashboard/AddSchComp";
import SchList from "../dashboard/SchList";


const AddSchScreen = ({ history }) => {

    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.userAuth.user);


    return error ? (
        <span className="error-message">{error}</span>
    ) : (
        <div className="dashboard_page">
            <HeaderComp />
            <div className="dashboard_flex_row">
                <LeftSideBar />

                <div className='dashboard_comp'>
                    <div className="dash_grid">
                        <div className="dash_grid_comp">
                            <AddSchComp />
                        </div>
                        <div className="dash_grid_list">
                            <SchList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSchScreen;
