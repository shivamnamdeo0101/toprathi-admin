import React, { useRef } from 'react'
import { useForm } from "react-hook-form";


function AddSliderComp() {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div className='add_post_form'>
            <div className='add_post_form_head'>
                <h2>Add Slide</h2>
            </div>

            <div className='add_post_form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='post_form_comp'>
                        <label>Title</label>
                        <input {...register("title", { required: true })} />
                        {errors.title && <span className='error'>Title is required</span>}
                    </div>

                    <div className='post_form_comp'>
                        <label>Description</label>
                        <input {...register("content", { required: true })} />
                        {errors.content && <span  className='error'>Description field is required</span>}
                    </div>
                    <div className='post_form_comp'>
                        <label>Description</label>
                        <input type="file" {...register("image", { required: true })} />
                        {errors.image && <span  className='error'>Image field is required</span>}
                    </div>
                    

                    <input type="submit" className='button'/>
                </form>
            </div>
        </div>
    )
}

export default AddSliderComp