import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import NewsService from '../../service/api/NewsService';


function AddPostComp() {
    const { newsAdd } = NewsService;
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data);
        const res = {
            "title": data.title,
            "content": data.content,
            "timestamp": Date.now(),
            "author": "shivam",
            "image": "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",
            "views": 1,
            "tags": [
                "Sports"
            ],
            "addAt": Date.now(),
            "updatedAt": Date.now()
        }
        addNewsFun(res)
        //console.log(res)
        reset()
    };


    const addNewsFun = async (data) => {
        const res = await newsAdd(data);
        console.log(res);
    }

    

    return (
        <div className='add_post_form'>
            <div className='add_post_form_head'>
                <h2>Add Post</h2>
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
                        {errors.content && <span className='error'>Description field is required</span>}
                    </div>
                    <div className='post_form_comp'>
                        <label>Image</label>
                        <input type="file" {...register("image", { required: true })} />
                        {errors.image && <span className='error'>Image field is required</span>}
                    </div>


                    <input type="submit" className='button' />
                </form>
            </div>
        </div>
    )
}

export default AddPostComp