import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { flushAuthData } from '../../store/UserSlice';

function HeaderComp() {
   const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.userAuth.user);
  const logout = ()=>{
    dispatch(flushAuthData());
    history.push("/login");
  }
  
  return (
    <div className="dashboard_header">
        <h2>Dashboard</h2>

        <div className='right_header'>
            <h3>{user?.user?.email}</h3>
            <button onClick={()=>logout()}> Logout</button>
        </div>
    </div>
  )
}

export default HeaderComp