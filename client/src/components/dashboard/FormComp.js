import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import SchFilterService from '../../service/api/SchFilterService';

function FormComp({ type, list }) {
    const history = useHistory();
    const {addFilter} = SchFilterService;
    const { control, register, handleSubmit, reset, getValues, setValue, watch, formState: { errors } } = useForm();
    const sch = useSelector(state => state?.sch)
    const onSubmit = async (data) => {

        let temp = data

        let indexId;
        if(list === undefined){
            indexId = 1
        }else{
            indexId = list?.length + 1
        }

        temp = {...data,indexId:indexId,type:type,value:data?.label}
        
        await addFilter(temp,type).then((res)=>{
            console.log(res)
            reset()
        })

    };

    console.log(list)


    return (

        <div className="dash_grid">
            <div className="dash_grid_comp">
                <div>
                    <p>{type}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='post_form_comp'>
                            <label>Label</label>
                            <input {...register("label", { required: true })} />
                            {errors?.label && <span className='error'>label is required</span>}
                        </div>
                        
                        <input type="submit" className='button' />
                    </form>
                </div>
            </div>
            <div className="dash_grid_list">
                <div>
                    {
                        list?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <pre>{JSON.stringify(item, null, 2)}</pre>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
        
}

export default FormComp