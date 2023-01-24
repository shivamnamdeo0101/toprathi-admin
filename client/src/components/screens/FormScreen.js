import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FormComp from '../dashboard/FormComp'
import HeaderComp from '../dashboard/HeaderComp'
import LeftSideBar from '../dashboard/LeftSideBar'


function FormScreen() {

    const { type } = useParams()

    const sch = useSelector(state => state?.sch)
    
    const getList = {
        "fromwhere":sch?.fromWhere,
        "authority":sch?.authority,
        "educationtype":sch?.educationType,
        "caste":sch?.caste,
        "region":sch?.region,
        "interest":sch?.interest,
        "examlist":sch?.examlist,
        "branch":sch?.branch,
        "stream":sch?.stream,
    }

   
    return (
        <div className="dashboard_page">
            <HeaderComp />
            <div className="dashboard_flex_row">
                <LeftSideBar />

                <div className='dashboard_comp'>
                    <FormComp type={type} list={getList[type] } />
                </div>
            </div>
        </div>
    )

}

export default FormScreen