import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Select from 'react-select';
import SchService from '../../service/api/SchService';
import CustomArrInput from './CustumArrInput';
import EditorComp from './EditorComp';

function AddSchComp() {
    const history = useHistory();
    const { control, register, handleSubmit, reset, getValues, setValue, watch, formState: { errors } } = useForm();

    const [editoValue, seteditoValue] = useState("")

    const { addSchAdmin } = SchService;
    const [schDetails, setschDetails] = useState([
        { value: '', }
    ])

    const [docRequired, setdocRequired] = useState([
        { value: '', }
    ])

    const [impNotes, setimpNotes] = useState([
        { value: '', }
    ])

    const [awards, setawards] = useState([
        { value: '', }
    ])

    
const genderList  = [
    {
      _id:0,
      indexId:1,
      value:"female",
      label:"Female"
    },
    {
      _id:1,
      indexId:2,
      value:"male",
      label:"Male"
    },
    {
      _id:2,
      indexId:3,
      value:"transgender",
      label:"Transgender"
    }
  ]


    const sch = useSelector(state => state?.sch)

    const getArrIndex = (arr) => arr.map((item) => item.indexId)
    const getArrObjId = (arr) => arr.map((item) => item._id)
    const getArrObjValue = (arr) => arr.map((item) => item.value)

    const onSubmit = async (data) => {
        const obj = {
            ...data, fromWhere: getArrIndex(data?.fromWhere),
            educationType: getArrIndex(data?.educationType),
            caste: getArrIndex(data?.caste),
            authority: getArrIndex(data?.authority),
            region: getArrIndex(data?.region),
            examList: getArrIndex(data?.examList),
            gender: getArrObjValue(data?.gender),
            annualIncome: data?.annualIncome,
            percentage: data?.percentage,
            schlorshipData:editoValue,
            // age: {
            //     min: data?.age_min,
            //     max: data?.age_max
            // },
            
            // schlorshipData: {
            //     docRequired: docRequired,
            //     impNotes: impNotes,
            //     schDetails: schDetails
            // }
        }
        await addSchAdmin(obj).then((res) => {
            console.log(res,"res---------------->")
        })
        reset()
        alert("Schlorship Added")
        history.push("/")
    };



    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='post_form_comp'>
                    <label>Schlorship Details</label>
                    <EditorComp setValue={seteditoValue} value={editoValue} />

                </div>
                
                <div className='post_form_comp'>
                    <label>Schlorship Name</label>
                    <input {...register("name", { required: true })} type="text" />
                    {errors.name && <span className='error'>name is required</span>}
                </div>


               


                <div className='post_form_comp'>
                    <label>Exams List</label>
                    <Controller
                        control={control}
                        name="examList"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.examlist}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.examList && <span className='error'>Examlist Type is required</span>}
                </div>


                <div className='post_form_comp'>
                    <label>Max Annual Income</label>
                    <input {...register("annualIncome", { required: true })} type="number" />
                    {errors.annualIncome && <span className='error'>Annual Income is required</span>}
                </div>


                <div className='post_form_comp'>
                    <label>Min Percentage Is Required</label>
                    <input {...register("percentage", { required: true })} type="number" />
                    {errors.percentage && <span className='error'>Percentage is required</span>}
                </div>


                <div className='post_form_comp'>
                    <label>From Where</label>
                    <Controller
                        control={control}
                        name="fromWhere"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.fromWhere}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.fromWhere && <span className='error'>From Where is required</span>}
                </div>

                <div className='post_form_comp'>
                    <label>Education type</label>
                    <Controller
                        control={control}
                        name="educationType"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.educationType}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.educationType && <span className='error'>Education Type is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Caste</label>
                    <Controller
                        control={control}
                        name="caste"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.caste}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.caste && <span className='error'>Caste  is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Authority</label>
                    <Controller
                        control={control}
                        name="authority"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.authority}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.authority && <span className='error'>Authority Type is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Region</label>
                    <Controller
                        control={control}
                        name="region"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.region}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.region && <span className='error'>Region Type is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Gender</label>
                    <Controller
                        control={control}
                        name="gender"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={genderList}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.gender && <span className='error'>Gender is required</span>}
                </div>

                {/* <div className='post_form_comp'>
                    <CustomArrInput
                        setInputFields={setschDetails}
                        inputFields={schDetails}
                        heading={"Schlorship Details"}
                    />
                </div>
                <div className='post_form_comp'>
                    <CustomArrInput
                        setInputFields={setdocRequired}
                        inputFields={docRequired}
                        heading={"Documents Required"}
                    />
                </div>
                <div className='post_form_comp'>
                    <CustomArrInput
                        setInputFields={setimpNotes}
                        inputFields={impNotes}
                        heading={"Important Notes"}
                    />
                </div>
                <div className='post_form_comp'>
                    <CustomArrInput
                        setInputFields={setawards}
                        inputFields={awards}
                        heading={"Awards"}
                    />
                </div> */}



                <input type="submit" className='button' />
            </form>
        </div>
    )
}

export default AddSchComp