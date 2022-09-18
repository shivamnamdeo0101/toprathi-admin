import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { useDispatch,useSelector } from "react-redux";
import { flushAuthData } from "../../store/UserSlice";

const PrivateScreen = ({history}) => {
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
    <div>{privateData}
      <button onClick={logout}>Logout
      </button>

      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default PrivateScreen;
