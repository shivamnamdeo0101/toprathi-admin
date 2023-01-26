import React from 'react';
import { useHistory } from 'react-router-dom';


function LeftSideBar() {
  const history = useHistory();

  return (
    <div className='left_side_bar'>

        <div className='left_side_menu'>
          <div className='left_side_menu_comp' onClick={()=>history.push("/")}>
            <h6>Dashboard</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/add-post")}>
            <h6>Add Article</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/add-schlorship")}>
            <h6>Schlorship</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/region")}>
            <h6>Regions</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/authority")}>
            <h6>Authority</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/educationtype")}>
            <h6>Education Type</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/interest")}>
            <h6>Interest List</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/examlist")}>
            <h6>Exams List</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/branch")}>
            <h6>Branch List</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/stream")}>
            <h6>Stream List</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/caste")}>
            <h6>Caste List</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/form/fromwhere")}>
            <h6>From Where</h6>
          </div>

          

        </div>

    </div>
  )
}

export default LeftSideBar