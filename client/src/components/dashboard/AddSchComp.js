import React, { useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Select from 'react-select';
import SchService from '../../service/api/SchService';
import EditorComp from './EditorComp';

function AddSchComp() {
    const history = useHistory();
    const { control, register, handleSubmit, reset, getValues, setValue, watch, formState: { errors } } = useForm();

    const { addSchAdmin } = SchService;

    const sch = useSelector(state => state?.sch)

    const getArrIndex = (arr) => arr.map((item) => item.indexId)
    const getArrObjId = (arr) => arr.map((item) => item._id)
    const getArrObjValue = (arr) => arr.map((item) => item.value)



    const onSubmit = async (data) => {

        console.log(data)

        return
        const obj = {
            ...data, fromWhere: getArrIndex(data?.fromWhere),
            educationType: getArrIndex(data?.educationType),
            caste: getArrIndex(data?.caste),
            authority: getArrIndex(data?.authority),
            region: getArrObjId(data?.region),
            gender: getArrObjValue(data?.gender),
            annualIncome: {
                min: data?.ai_min,
                max: data?.ai_max
            },
            percentage: {
                min: data?.per_min,
                max: data?.per_max
            },


        }
        await addSchAdmin(obj).then((res) => {
            console.log(res.data)
        })

        reset()
        alert("Schlorship Added")
        history.push("/")
    };



    return (
        <div>
            <EditorComp />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='post_form_comp'>
                    <label>Schlorship Name</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span className='error'>name is required</span>}
                </div>


                <div className='post_form_comp'>
                    <label>Annual Income</label>
                    <input {...register("ai_min", { required: true })} placeholder="Minimum Annual Income" />
                    {errors.ai_min && <span className='error'>Minimum annual income is required</span>}
                    <input {...register("ai_max", { required: true })} placeholder="Maximum Annual Income" />
                    {errors.ai_max && <span className='error'>Maximum annual income is required</span>}
                </div>
                <div className='post_form_comp'>
                    <label>Percentage</label>
                    <input {...register("per_min", { required: true })} placeholder="Minimum Percentage" />
                    {errors.ai_min && <span className='error'>Minimum Percentage is required</span>}
                    <input {...register("per_max", { required: true })} placeholder="Maximum Percentage" />
                    {errors.ai_max && <span className='error'>Maximum Percentage is required</span>}
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
                    <label>Awards</label>
                    <Controller
                        control={control}
                        name="awards"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <textarea
                                options={sch?.fromWhere}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                    {errors.awards && <span className='error'>Awards Where is required</span>}
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
                                options={[{ id: 0, value: 0, label: "Female" }, { id: 1, value: 1, label: "Male" }]}
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

                <input type="submit" className='button' />
            </form>
        </div>
    )
}

export default AddSchComp