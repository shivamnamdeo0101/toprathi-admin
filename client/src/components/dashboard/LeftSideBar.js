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
          <div className='left_side_menu_comp' onClick={()=>history.push("/add-slide")}>
            <h6>Add Slide</h6>
          </div>
          <div className='left_side_menu_comp' onClick={()=>history.push("/articles")}>
            <h6>Articles</h6>
          </div>
          <div className='left_side_menu_comp'>
            <h6>Slider</h6>
          </div>
          <div className='left_side_menu_comp'>
            <h6>Others</h6>
          </div>

        </div>

    </div>
  )
}

export default LeftSideBar