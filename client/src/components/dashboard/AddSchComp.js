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
      value:1,
      label:"Female"
    },
    {
      _id:1,
      indexId:2,
      value:2,
      label:"Male"
    },
    {
      _id:2,
      indexId:3,
      value:3,
      label:"Transgender"
    }
  ]

  
const classList = [
    {
        _id: 0,
        indexId: 5,
        value: 5,
        label: "Class 5"
    },
    {
        _id: 1,
        indexId: 6,
        value: 6,
        label: "Class 6"
    },
    {
        _id: 2,
        indexId: 7,
        value: 7,
        label: "Class 7"
    },
    {
        _id: 3,
        indexId: 8,
        value: 8,
        label: "Class 8"
    },
    {
        _id: 4,
        indexId: 9,
        value: 9,
        label: "Class 9"
    },
    {
        _id: 5,
        indexId: 10,
        value: 10,
        label: "Class 10"
    },
    {
        _id: 6,
        indexId: 11,
        value: 11,
        label: "Class 11"
    },
    {
        _id: 7,
        indexId: 12,
        value: 12,
        label: "Class 12"
    },

]

    const sch = useSelector(state => state?.sch)

    const getArrIndex = (arr) => arr.map((item) => item.indexId)
    const getArrObjId = (arr) => arr.map((item) => item._id)
    const getArrObjValue = (arr) => arr.map((item) => item.value)

    const onSubmit = async (data) => {

        const obj = {
            ...data, 
            fromWhere: getArrIndex(data?.fromWhere),
            educationType: getArrIndex(data?.educationType),
            caste: getArrIndex(data?.caste),
           
            authority: getArrIndex(data?.authority),
            region: getArrIndex(data?.region),
            examList: getArrIndex(data?.examList),
            
            gender: getArrObjValue(data?.gender),
            annualIncome: getArrIndex(data?.annualIncome),
            compExamRank:parseInt(data?.compExamRank),
            
            lastYearCollegePercent:parseInt(data?.lastYearCollegePercent),
            lastClassExamPercent:parseInt(data?.lastClassExamPercent),
            compExamRank:parseInt(data?.compExamRank),
            
            currClass:getArrIndex(data?.currClass),
            degreeName:getArrIndex(data?.degreeName),
            stream:getArrIndex(data?.stream),

            branch:getArrIndex(data?.branch),

            // age: {
            //     min: data?.age_min,
            //     max: data?.age_max
            // },
            
            schlorshipData: {
                htmlText:editoValue,
                docRequired: docRequired,
                impNotes: impNotes,
                schDetails: schDetails
            }
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
                    <p>{editoValue}</p>
                </div>
                
                <div className='post_form_comp'>
                    <label>Schlorship Name</label>
                    <input {...register("name", { required: true })} type="text" />
                    {errors.name && <span className='error'>name is required</span>}
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
                    <label>Branch</label>
                    <Controller
                        control={control}
                        name="branch"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.branch}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.branch && <span className='error'>Branch is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Stream</label>
                    <Controller
                        control={control}
                        name="stream"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.stream}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.stream && <span className='error'>Stream is required</span>}
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

                <div className='post_form_comp'>
                    <label>Classes</label>
                    <Controller
                        control={control}
                        name="currClass"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={classList}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.currClass && <span className='error'>Class List Type is required</span>}
                </div>
                
                <div className='post_form_comp'>
                    <label>Annual Income</label>
                    <Controller
                        control={control}
                        name="annualIncome"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.annualIncome}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.annualIncome && <span className='error'>annualIncome Type is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Last Class Exam Percent</label>
                    <input {...register("lastClassExamPercent", { required: true })} type="number" />
                    {errors.lastClassExamPercent && <span className='error'>lastClassExamPercent is required</span>}
                </div>

                <div className='post_form_comp'>
                    <label>Comptative Exams List</label>
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
                    <label>Degree List</label>
                    <Controller
                        control={control}
                        name="degreeName"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={sch?.degreeName}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.degreeName && <span className='error'>degreeName Type is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>10th  Class Percentage</label>
                    <input {...register("xPercent", { required: true })} type="number" />
                    {errors.xPercent && <span className='error'>xPercent is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>12th  Class Percentage</label>
                    <input {...register("xIIPercent", { required: true })} type="number" />
                    {errors.xIIPercent && <span className='error'>xIIPercent is required</span>}
                </div>

                <div className='post_form_comp'>
                    <label>Last Year College  Percentage</label>
                    <input {...register("lastYearCollegePercent", { required: true })} type="number" />
                    {errors.lastYearCollegePercent && <span className='error'>lastYearCollegePercent is required</span>}
                </div>
               
                <div className='post_form_comp'>
                    <label>Compatative Exam Rank</label>
                    <input {...register("compExamRank", { required: true })} type="number" />
                    {errors.compExamRank && <span className='error'>compExamRank is required</span>}
                </div>


               

                <div className='post_form_comp'>
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
                </div>



                <input type="submit" className='button' />
            </form>
        </div>
    )
}

export default AddSchComp